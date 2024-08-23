<?php

error_reporting(E_ALL);
ini_set('display_errors', '1');

// Composerのオートローダーを読み込む
require 'vendor/autoload.php';

if ($argc !== 4) {
    echo "エラー: 引数が足りません。\n";
    exit;
}

$command = $argv[1];
$inputFile = $argv[2];
$outputFile = $argv[3];

if ($command !== "markdown") {
    echo "エラー: markdownコマンドではありません。\n";
    exit;
}

if (!file_exists($inputFile)) {
    echo "エラー: 出力するファイルがありません。\n";
    exit;
}

$markdownContent = file_get_contents($inputFile);

// Parsedownクラスのインスタンスを作成
$parsedown = new Parsedown();

// マークダウンをHTMLに変換
$htmlContent = $parsedown->text($markdownContent);

if ($htmlContent === false) {
    echo "エラー: マークダウンの変換に失敗しました。\n";
    exit;
}

$result = file_put_contents($outputFile, $htmlContent);

if ($result === false) {
    echo "エラー: 出力ファイルに書き込めませんでした。\n";
    exit;
} else {
    echo "マークダウンをHTML変換に成功しました。\n";    
}