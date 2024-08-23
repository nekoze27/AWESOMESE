<?php

function validateArgs($argc, $argv) {
    if ($argc < 3) {
        echo "エラー: コマンドは少なくとも2つの引数が必要です。\n";
        exit;
    }

    $command = $argv[1];
    $commands = ["reverse", "copy", "duplicate-contents", "replace-string"];

    if (!in_array($command, $commands)) {
        echo "エラー: 無効なコマンドです。\n";
        exit;
    }
}

function reverseFile($inputPath, $outputPath) {
    if (!file_exists($inputPath)) {
        echo "エラー: 入力ファイルが存在しません。\n";
        exit;
    }

    $content = file_get_contents($inputPath);
    $reversedContent = strrev($content);
    file_put_contents($outputPath, $reversedContent);

    echo "内容を逆にしたファイルを {$outputPath} に作成しました。\n";
}

function copyFile($inputPath, $outputPath) {
    if (!file_exists($inputPath)) {
        echo "エラー: 入力ファイルが存在しません。\n";
        exit;
    }

    $content = file_get_contents($inputPath);

    if (!file_put_contents($outputPath, $content)) {
        echo "エラー: 入力ファイルが存在しません。\n";
        exit;
    }

    echo "ファイルを {$outputPath} にコピーしました。\n";
}

function duplicateContentsFile($inputPath, $n) {
    if (!file_exists($inputPath)) {
        echo "エラー: 入力ファイルが存在しません。\n";
        exit;
    }

    if (!is_numeric($n) || $n < 1) {
        echo "エラー: n は1以上の整数でなければなりません。\n";
        exit;
    }

    $content = file_get_contents($inputPath);
    $duplicatedContent = str_repeat($content, $n);
    file_put_contents($inputPath, $duplicatedContent);

    echo "ファイルを {$n} 回復性しました。\n";
}

function replaceString($inputPath, $needle, $newString) {
    if (!file_exists($inputPath)) {
        echo "エラー: 入力ファイルが存在しません。\n";
        exit;
    }

    $content = file_get_contents($inputPath);
    $replacedContent = str_replace($inputPath, $newString, $content);
    file_put_contents($inputPath, $replacedContent);

    echo "'{$needle} を '{$newString}' に置き換えました。\n";
}

validateArgs($argc, $argv);

$command = $argv[1];

switch ($command) {
    case "reverse":
        if ($argc !==4) {
            echo "エラー: reverse コマンドには2つの引数が必要です。\n";
            exit;
        }
        reverseFile($argv[2], $argv[3]);
        break;

    case "copy":
        if ($argc !==4) {
            echo "エラー: copy コマンドには2つの引数が必要です。\n";
            exit;
        }
        copyFile($argv[2], $argv[3]);
        break;

    case "duplicate-contents":
        if ($argc !==4) {
            echo "エラー: duplicate-cintents コマンドには2つの引数が必要です。\n";
            exit;
        }
        duplicateContentsFile($argv[2], $argv[3]);
        break;

    case "replace-string":
        if ($argc !==5) {
            echo "エラー: replace-string    s コマンドには3つの引数が必要です。\n";
            exit;
        }
        replaceString($argv[2], $argv[3], $argv[4]);
        break;

    default:
        echo "エラー: 無効なコマンドです。\n";
        exit;
}

?>
