<?php
// config.php

// Detail koneksi database
define('DB_HOST', 'localhost'); // Host database, biasanya localhost
define('DB_USER', 'root');     // Username MySQL default XAMPP adalah root
define('DB_PASS', '');         // Password MySQL default XAMPP adalah kosong
define('DB_NAME', 'website_romantis'); // Nama database yang Anda buat

// Error reporting untuk debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Set header untuk mengizinkan CORS (Cross-Origin Resource Sharing)
// Penting saat pengembangan lokal jika port Live Server berbeda dari port Apache
// Atau jika Anda menguji dari domain yang berbeda
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json'); // Respons selalu JSON
?>