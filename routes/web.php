<?php

use Illuminate\Support\Facades\Route;

// Ruta raíz - muestra la aplicación Vue (login por defecto)
Route::view('/', 'app')->name('home');

// Rutas de la aplicación Vue - definidas para Wayfinder
Route::view('/ecommerce', 'app')->name('ecommerce');
Route::view('/calendar', 'app')->name('calendar');
Route::view('/profile', 'app')->name('profile');
Route::view('/form-elements', 'app')->name('form-elements');
Route::view('/basic-tables', 'app')->name('basic-tables');
Route::view('/line-chart', 'app')->name('line-chart');
Route::view('/bar-chart', 'app')->name('bar-chart');
Route::view('/alerts', 'app')->name('alerts');
Route::view('/avatars', 'app')->name('avatars');
Route::view('/badge', 'app')->name('badge');
Route::view('/buttons', 'app')->name('buttons');
Route::view('/images', 'app')->name('images');
Route::view('/videos', 'app')->name('videos');
Route::view('/blank', 'app')->name('blank');
Route::view('/error-404', 'app')->name('error-404');
Route::view('/signin', 'app')->name('signin');
Route::view('/signup', 'app')->name('signup');

// Ruta catch-all para cualquier otra ruta no definida
Route::view('/{any}', 'app')->where('any', '.*');
