<?php
$Root = $_SERVER['DOCUMENT_ROOT'];
$Timestamp = time();

// 初めにココを設定
$Page = 'top';

?>
<!DOCTYPE html>
<html lang="ja">

<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#">
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title></title>

  <?php
  require_once($Root . "/lib/parts/ogp.php");
  echo ogpSouceCode('');
  ?>
  <link rel="stylesheet" href="/lib/fonts/font_awesome/font-awesome.min.css">
  <link rel="stylesheet"
    href="/lib/css/style.css?<?php echo $Timestamp; ?>">

  <script src="/lib/js/jquery.min.js"></script><!-- 最新版があればダウンロード ※~IE8対応の場合は、jQuery1.xの最新版 -->
  <script src="/lib/js/smoothscroll.js"></script>
  <script src="/lib/js/particles.min.js"></script>
  <script src="/lib/js/common.js?<?php echo $Timestamp; ?>"></script>
  <script src="/lib/js/top.js?<?php echo $Timestamp; ?>"></script>

  <!--[if lt IE 9]>
	<script src="/lib/js/html5shiv.js"></script>
  <![endif]-->

</head>

<body>
  <div class="wrap wrap-<?php echo $Page; ?>">
    <?php require_once($Root . "/lib/parts/header.php"); ?>

    <!-- MainVisual -->
    <div id="mv" class="mv js-mv">
      <div class="mv_inner l-inner">
        <div class="mv_body">
          <h2 class="mv_ttl">
            <img src="./images/mv_ttl.png" alt="">
          </h2>
          <p class="mv_txt">Good to see you!</p>
        </div>
        <section class="mv_topics topicsCont">
          <div class="topicsCont_inner">
            <h3 class="topicsCont_ttl headingA headingA-s">TOPICS</h3>
            <div class="topicsCont_body">
              <p class="topicsCont_topics">2020.07.11　Webサイトを公開しました。</p>
            </div>
          </div>
        </section>
      </div>
      <div class="mv_bg"></div>
    </div>
    <!-- MainVisual END -->

    <!-- Main -->
    <section class="main main-<?php echo $Page; ?>">

      <!-- SectionAbout -->
      <section id="about" class="topSec topSec-about">
        <div class="topSec_inner l-inner">
          <div class="aboutCont topSec_about">
            <div class="aboutCont_inner">
              <h3 class="aboutCont_ttl headingA">ABOUT</h3>
              <p class="aboutCont_txt">
                テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
              </p>
            </div>
          </div>
          <div class="topSec_img">
            <img src="./images/about_img.png" alt="">
          </div>
        </div>
        <section class="topSec_skills skills">
          <div class="skills_inner l-inner">
            <h4 class="skills_ttl">SKILLS</h4>
            <ul class="skills_list l-grid">
              <li class="l-grid_item l-grid_item-3">
                <img src="./images/html.png" alt="">
              </li>
              <li class="l-grid_item l-grid_item-3">
                <img src="./images/javascript.png" alt="">
              </li>
              <li class="l-grid_item l-grid_item-3">
                <img src="./images/php.png" alt="">
              </li>
              <li class="l-grid_item l-grid_item-3">
                <img src="./images/wordpress.png" alt="">
              </li>
            </ul>
            <div class="skills_others">
              <img src="./images/bg_skillIcons.png" alt="">
            </div>
          </div>
        </section>
      </section>
      <!-- SectionAbout END -->

      <!-- SectionWorks -->
      <section id="works" class="topSec topSec-works">
        <div class="topSec_inner l-inner">
          <h3 class="topSec_ttl headingA">WORKS</h3>
          <div class="topSec_body">
            <ul class="topSec_list l-grid">
              <li class="l-grid_item l-grid_item-6">
                <a href="#">
                  <article class="worksCont menuAnim">
                    <div class="worksCont_inner">
                      <div class="worksCont_img">
                        <img src="./images/works.jpg" alt="">
                      </div>
                      <div class="worksCont_body menuAnim_body">
                        <h4 class="worksCont_ttl">制作実績タイトル</h4>
                        <p class="worksCont_txt">
                          テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
                        </p>
                      </div>
                    </div>
                  </article>
                </a>
              </li>
              <li class="l-grid_item l-grid_item-6">
                <a href="#">
                  <article class="worksCont menuAnim">
                    <div class="worksCont_inner">
                      <div class="worksCont_img">
                        <img src="./images/works02.jpg" alt="">
                      </div>
                      <div class="worksCont_body menuAnim_body">
                        <h4 class="worksCont_ttl">制作実績タイトル</h4>
                        <p class="worksCont_txt">
                          テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
                        </p>
                      </div>
                    </div>
                  </article>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <!-- SectionWorks END -->

      <!-- SectionBlog -->
      <section id="blog" class="topSec topSec-blog">
        <div class="topSec_inner l-inner">
          <div class="topSec_header">
            <h3 class="topSec_ttl headingA">BLOG</h3>
          </div>
          <div class="topSec_body">
            <ul class="topSec_list l-grid l-gutter-m">
              <li class="l-grid_item l-grid_item-3">
                <a href="#">
                  <article class="card">
                    <div class="card_inner">
                      <div class="card_img">
                        <img src="./images/thumb-sample.jpg" alt="">
                      </div>
                      <div class="card_body">
                        <p class="card_date"><i class="fa fa-clock-o" aria-hidden="true"></i> <time
                            datetime="2020-07-07">2020.07.07</time></p>
                        <h4 class="card_ttl">タイトルが入ります。</h4>
                        <p class="card_txt">テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
                      </div>
                    </div>
                  </article>
                </a>
              </li>

              <li class="l-grid_item l-grid_item-3">
                <a href="#">
                  <article class="card">
                    <div class="card_inner">
                      <div class="card_img">
                        <img src="./images/thumb-sample.jpg" alt="">
                      </div>
                      <div class="card_body">
                        <p class="card_date"><i class="fa fa-clock-o" aria-hidden="true"></i> <time
                            datetime="2020-07-07">2020.07.07</time></p>
                        <h4 class="card_ttl">タイトルが入ります。</h4>
                        <p class="card_txt">テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
                      </div>
                    </div>
                  </article>
                </a>
              </li>
              <li class="l-grid_item l-grid_item-3">
                <a href="#">
                  <article class="card">
                    <div class="card_inner">
                      <div class="card_img">
                        <img src="./images/thumb-sample.jpg" alt="">
                      </div>
                      <div class="card_body">
                        <p class="card_date"><i class="fa fa-clock-o" aria-hidden="true"></i> <time
                            datetime="2020-07-07">2020.07.07</time></p>
                        <h4 class="card_ttl">タイトルが入ります。</h4>
                        <p class="card_txt">テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
                      </div>
                    </div>
                  </article>
                </a>
              </li>
              <li class="l-grid_item l-grid_item-3">
                <a href="#">
                  <article class="card">
                    <div class="card_inner">
                      <div class="card_img">
                        <img src="./images/thumb-sample.jpg" alt="">
                      </div>
                      <div class="card_body">
                        <p class="card_date"><i class="fa fa-clock-o" aria-hidden="true"></i> <time
                            datetime="2020-07-07">2020.07.07</time></p>
                        <h4 class="card_ttl">タイトルが入ります。</h4>
                        <p class="card_txt">テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
                      </div>
                    </div>
                  </article>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <!-- SectionBlog END -->

    </section>
    <!-- Main End -->

    <?php require_once($Root . "/lib/parts/footer.php"); ?>

    <div id="js-particles" class="particles"></div>

  </div>
</body>

</html>