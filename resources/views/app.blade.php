<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta  name='viewport'  content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
    <title>BirdsDigital - QuickSale</title>
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <link rel="manifest" href="/manifest.json">
    <meta name="theme-color" media="(prefers-color-scheme: light)" content="white">
    <meta name="theme-color" media="(prefers-color-scheme: dark)"  content="black">
    <link rel="apple-touch-icon" href="/ca.png">
    <link rel="icon" href="{{ URL::asset('/images/favicon.ico') }}" type="image/x-icon"/>
    <script src="https://sdk.mercadopago.com/js/v2"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&family=Oleo+Script+Swash+Caps&family=Roboto:wght@300&family=Tapestry&display=swap" rel="stylesheet">
</head>

<body>

<!-- React root DOM -->
<div id="app">
</div>

<!-- React JS -->
<script src="{{ asset('js/app.js') }}" defer></script>
<script>
    if (!navigator.serviceWorker.controller) {
        navigator.serviceWorker.register("/sw.js").then(function (reg) {
            console.log("Service worker has been registered for scope: " + reg.scope);
        });
    }
</script>
</body>
</html>
