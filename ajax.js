
async function getGif(search){
   const res = await axios.get("http://api.giphy.com/v1/gifs/search", {params:{api_key: 'NiLkAE4N6wb0wYDLUlTVDPi25lNJToNx', q:search }});
   let random = Math.floor(Math.random() * 50);
   $('img').attr('src', res.data.data[random].images.original.url);
    $('.delete').on('click', function(){
        $('img').remove()
    });
}


$('form').on('submit', function(e){
    e.preventDefault();
    let $input = $('.search');
    getGif($input.val())
    $input.val('');
})


