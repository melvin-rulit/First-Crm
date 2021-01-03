<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title> {{ trans('panel.site_title') }}</title>


    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- tailwindCss -->
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/style.css') }}" rel="stylesheet">
    <link href="{{ asset('css/personal.css') }}" rel="stylesheet">

<!--  анимированные переходы между компонентами */ -->
    <style type="text/css">

        .component-fade-enter-active,
        .component-fade-leave-active {
            transition: opacity .3s ease;
        }

        .component-fade-enter,
        .component-fade-leave-to

        /* .component-fade-leave-active до версии 2.1.8 */
            {
            opacity: 0;
        }

    </style>

</head>


<body class="bg-after-login">
<div id="app">

    <head-component></head-component>


        @yield('contentAfterlogin')


</div>



      <!-- Scripts -->
      <script src="{{ asset('js/app.js') }}"></script>
{{--      <script src="{{ asset('js/custom.js') }}"></script>--}}

</body>
</html>
