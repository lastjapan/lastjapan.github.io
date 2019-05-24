module.exports = function () {
  $(document).ready(function() {

    var ids = [];
    var client = ShopifyBuy.buildClient({
    accessToken: 'acfa5c995bb522caecd503f09fb66385',
    domain: 'circadian-rhythms.myshopify.com',
    appId: '6'
    });

    var populate = function ( product ) {
      var item = '#item-' + product.id;
      $(item).find('.itemTitle').append( product.title );
      $(item).find( '.itemPrice' ).append( product.formattedPrice );

      // if has Size variant
      if ( product.selectedVariant.attrs.product.variants.length > 1 ) {
        var sizes = product.selectedVariant.attrs.product.variants;

        var select = '<div class="w-100 mb1 mt1"><select name="size" class="genSel">' + sizes.map(function(value) {
            if (value.available) {
              return '<option data-id="'+ value.attrs.variant.id +'" value="' + value.attrs.variant.title + '">' + value.attrs.variant.title + '</option>';
            } else {
              return '<option data-id="'+ value.attrs.variant.id +'" value="' + value.attrs.variant.title + '" disabled>' + value.attrs.variant.title + '- SOLD OUT</option>';
            }
        }) + '</select></div>';

        $(document).ready(function() {
          var activeVariantId = sizes[0].attrs.variant.id;
          $(item).find('.buy-button').attr('data-id', activeVariantId).attr('id', activeVariantId);
        });

         $(item).find( '.itemPrice' ).append(select);
         $(item + ' .oneSize').hide();
      }

      $(item).find( '.itemDescription' ).append( product.description );
      imageCount = product.images.length;
      imageData = [];
      for (i=0; i < imageCount; i++) {
        var imageSrc = product.images[i].src;
        var filenameSplit = imageSrc.substring(imageSrc.lastIndexOf('/')+1).split(/\s*\-\s*/g);
        var fit = filenameSplit[1];
        if (fit === 'cover') {
          var fit = 'contain'
        }
        var image = {
          img: imageSrc,
          fit: 'cover'
        }
        imageData.push(image);
      }

      if ( $(item).find('.record').length == 0 ) {
        $(item + ' .fotorama').fotorama({
            data: imageData,
            nav: false,
            spinner: {
              lines: 13,
              color: 'rgba(0, 0, 0, 0)'
            }
        });
      } else {
        $(item + ' .record').html('<img src=' + imageData[0].img +' class="w-100 db ma0"/>')
      }

      if (product.available === false) {
        $(item + ' .buy-button').addClass('btn-disabled').html('SOLD OUT').removeClass('.buy-button');
      }
    }

    //Thumbnail event click
    $('body').on('click', '.thumbnail', function(e) {
      e.preventDefault();
      if (!$(this).hasClass('thumbnail-active')) {
        var item = $(this).attr('data-parent');
        var id = $(this).attr('data-id');
        var $fotoramaDiv = $(item + ' .fotorama').fotorama();
        var fotorama = $fotoramaDiv.data('fotorama');
        fotorama.show(id);
        $('.thumbnail-active').removeClass('thumbnail-active');
        $(this).addClass('thumbnail-active');
      }
    });

    //Next click
    $('body').on('click', '.btn-next', function(e) {
      if(!$(this).hasClass('btn-arrow-inactive')) {
        e.preventDefault();
        var id = $(this).attr('data-productId');
        var item = '#item-' + id;
        var $fotoramaDiv = $(item + ' .fotorama').fotorama();
        var fotorama = $fotoramaDiv.data('fotorama');
        fotorama.show('>');

        var size = fotorama.size;
        var activeFrameIndex = fotorama.activeFrame.i;
        // if (size == activeFrameIndex) {
        //   $(this).addClass('btn-arrow-inactive');
        // }
        $(item + ' .btn-prev').removeClass('btn-arrow-inactive');
      }
    });

    //Prev click
    $('body').on('click', '.btn-prev', function(e) {
      if(!$(this).hasClass('btn-arrow-inactive')) {
        e.preventDefault();
        var id = $(this).attr('data-productId');
        var item = '#item-' + id;
        var $fotoramaDiv = $(item + ' .fotorama').fotorama();
        var fotorama = $fotoramaDiv.data('fotorama');
        fotorama.show('<');

        // var size = fotorama.size;
        // var activeFrameIndex = fotorama.activeFrame.i;
        // if (activeFrameIndex == 1) {
        //   $(this).addClass('btn-arrow-inactive');
        // }
        $(item + ' .btn-next').removeClass('btn-arrow-inactive');
      }
    });

    // On size select change
    $('body').on('change', '.genSel', function(sel){
      var val = $(sel.target).find('option:selected').attr('data-id');
      $(sel.target).closest('.collectionItem').find('.buy-button').attr('data-id', val).attr('id', val);
    });

    $('.collectionItem').each(function(){
      var $item = $(this);
      var id = $(this).children('.buy-button').attr('id');
      ids.push(id);
    }).promise().done(function($item){
      client.fetchQueryProducts({products_ids: ids}).then(function (products) {
        for(var index in products) {
          var product = {
            id: products[index].id,
            selectedVariant: products[index].selectedVariant,
            selectedVariantImage: products[index].selectedVariantImage,
            currentOptions: products[index].options,
            title: products[index].title,
            images: products[index].images,
            price: products[index].selectedVariant.price,
            formattedPrice: products[index].selectedVariant.formattedPrice,
            available: products[index].selectedVariant.available,
            description: products[index].description
          }
          populate(product, $item);
        }
      });
    });
  });
}
