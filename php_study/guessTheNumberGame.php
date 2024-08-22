echo "最大値を入力してください: ";
$max = intval(trim(fgets(STDIN)));

if ($min > $max) {
    echo "エラー: 最小値が最大値を超えています。\n";
    exit;
}

$target = rand($min, $max);
$attempts = 0;
$maxAttempts = 5;

echo "数を当ててください。{$min}から{$max}の間の数を入力してください。\n";

while ( $attempts < $maxAttempts) {
    echo "あなたの推測: ";
    $guess = intval(trim(fgets(STDIN)));
    $attempts++;

    if ($guess === $target) {
        echo "おめでとうございます! 正解です。\n";
        break;
    } elseif ($guess < $target) {
        echo "もっと大きい数字です。\n";
    } else {
        echo "もっと小さい数字です。\n;";
    }

    if ($attempts == $maxAttempts) {
        echo "残念! 試行回数が終了しました。正解は {$target} でした。\n";
    }
}

?>