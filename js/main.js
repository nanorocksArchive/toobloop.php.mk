window.onload = function(e)
{
    let url = document.getElementById('btn-find-url');

    url.addEventListener('click', function(){

        let errors = document.getElementById('err-url');
        errors.innerHTML = '';
        let url = document.getElementById('input-url').value;
        try{
            url = new URL(url);
        }catch (e) {
            errors.innerHTML = 'INVALID URL';
            return -1;
        }

        if(!url.hostname.includes('youtube.com'))
        {
            errors.innerHTML = 'INVALID URL. MUST START WITH YOUTUBE.COM';
            return -1;
        }

        let params = new URLSearchParams(url.search);

        if(!params.has('v'))
        {
            errors.innerHTML = 'INVALID URL. INVALID PARAMS';
            return -1;
        }

        let val = params.get('v');

        let queryParams =  val + '?autoplay=1&controls=0&loop=1&playlist=8HSr8BjcufM&amp;showinfo=0';

        let protocol = window.location.protocol;

        let src = protocol + '//www.youtube.com/embed/' + queryParams;

        console.log(src);
        document.getElementById('load-link').src = src;
        localStorage.setItem('url', src);
        //location.reload();
    });


    function onLoadPageShowVideo()
    {
        let example = '';
        let url = localStorage.getItem('url');
        if( url == null )
        {
            document.getElementById('load-link').src = example;
            return -1;
        }
        document.getElementById('load-link').src = url;
    }

    onLoadPageShowVideo();
};