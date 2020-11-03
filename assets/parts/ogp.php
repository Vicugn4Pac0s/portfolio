<?php
function ogpSouceCode($name)
{
    if ($name == '') {
        $pageName = '';
    } else {
        $pageName = $name . ' | ';
    }
    ?>
    <meta property="og:title" content="<?php echo $pageName ?>Yoshiki's portfolio site">
    <meta property="og:type" content="website">
    <meta property="og:url" content="">
    <meta property="og:image" content="">
    <meta property="og:site_name" content="Yoshiki's portfolio site">
    <meta property="og:description" content="YOSHIKIのポートフォリオサイト。独学でWebサイト制作を学び、Web制作会社に入社、数々の大手企業のWebサイト制作に携わってきました。煩わしいこと・めんどくさいことが大嫌いすぎて、快適なPC環境を求めて日々模索中。">
<?php
}
?>