<?php
function ogpSouceCode($name)
{
    if ($name == '') {
        $pageName = '';
    } else {
        $pageName = $name . ' | ';
    }
    ?>
    <meta property="og:title" content="<?php echo $pageName ?>">
    <meta property="og:type" content="website">
    <meta property="og:url" content="">
    <meta property="og:image" content="">
    <meta property="og:site_name" content="">
    <meta property="og:description" content="">
<?php
}
?>