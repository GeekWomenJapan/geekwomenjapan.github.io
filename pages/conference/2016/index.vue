<template>
<html lang="ja">
<body>
<nav id="nav">
  <ul class="container">
    <li><nuxt-link to="#what-is">WHAT IS?</nuxt-link></li>
    <li><nuxt-link to="#about">ABOUT</nuxt-link></li>
    <li><nuxt-link to="#timetable">TIME TABLE</nuxt-link></li>
    <li><nuxt-link to="#speaker">SPEAKER</nuxt-link></li>
    <li><nuxt-link to="#sponsor">SPONSOR</nuxt-link></li>
    <li><nuxt-link to="#">|</nuxt-link></li>
    <li><nuxt-link to="/">Geek Women Japan</nuxt-link></li>
  </ul>
</nav>
<header class="header">
  <img src="@/static/conference/2016/logo.png" alt="Geek Women Japan" class="site-logo">
  <h1 class="site-title">Geek Women Japan 2016</h1>
  <p class="site-description">November 3rd in National Olympic Memorial Youth Center</p>
  <h2 class="heading">開催御礼</h2>
  <p class="about-text-strong">
  Geek Women Japanは参加者、スポンサー、スタッフ等、皆様のおかげで盛況のうちに終了しました。ご来場・ご協力いただいた皆様、ありがとうございました。
  </p>
  <a href="https://eventdots.jp/eventreport/598461" class="button button-showy">当日の様子</a>
</header>
<section class="what-is" id="what-is">
  <h2 class="heading">WHAT IS?</h2>
  <div class="about-paragraph">
    <p class="about-text-header">
      Geek Women Japan 2016はエンジニア女子が中心となって一同に集まり、ギークなセッションを繰り広げるカンファレンスです
    </p>
    <p class="about-text-strong">
      Keynoteセッションは「GitHub社」に決定！！
    </p>
    <p class="about-text-strong">
      共催女性エンジニアコミュニティがコラボして技術セッションをお届け！
    </p>
    <p class="about-text-strong">
      女性だけでなく、男性もご参加いただけます！
    <p class="about-text">
      幅広く最新の技術情報を知りたい、という方をはじめ、どこかのコミュニティに参加してみたいけど第一歩が踏めていない方、
      他のコミュニティものぞいてみたい！という方、奮ってご参加ください。
    </p>
    <p class="about-text">
      また、開催後に懇親会を予定しております。本イベント会場ではなく、近隣の外部にて行う予定でいます。(有料・アルコールあり)別途連絡します。こちらも奮ってご参加ください。
    </p>
  </div>
</section>
<section class="about">
  <h2 class="heading">なぜやるのか</h2>
  <br>
  <h3 class="sub-heading">技術に縛られない女性エンジニアの輪を形成するため</h3>
  <p class="about-text">
    全国各地様々な分野で女性エンジニアのコミュニティが活動をしています。たくさんあるけれど、どの女性エンジニアコミュニティも多かれ少なかれ設立の動機の１つに「女性のエンジニアに会うことが少ないから、会いたい・話したい」があることに気がつきました。もちろん各コミュニティによって程度が異なるとは思いますが、どこかにその気持ちがあって始まったコミュニティは少なくないと思っています。「女性エンジニアで会いたい・話したい」のであれば”技術に縛らなくてもいい”。
  </p>
  <p class="about-text">そこで生まれたのがGeek Women Japanです。携わる言語に関わらず、新しい知識や発見をしながら女性エンジニアの輪を広めてもらいたい。それが私たちがこのイベントを開催する理由です。
  </p>
</section>
<section class="about" id="about">
  <h2 class="heading">ABOUT</h2>
  <table class="about-table">
    <tbody>
    <tr>
      <th>日時</th>
      <td><p>2016年11月3日(木・祝） 10:00〜19:00 (開場9:00)</p></td>
    </tr>
    <tr>
      <th>会場</th>
      <td>
        <p>国立オリンピック記念青少年総合センター センター棟4F</p>
        <p>
          <a href="https://www.google.co.jp/maps/place/%E5%9B%BD%E7%AB%8B%E3%82%AA%E3%83%AA%E3%83%B3%E3%83%94%E3%83%83%E3%82%AF%E8%A8%98%E5%BF%B5%E9%9D%92%E5%B0%91%E5%B9%B4%E7%B7%8F%E5%90%88%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC/@35.6757663,139.6936241,15z/data=!4m2!3m1!1s0x0:0x62ff6efc447ae032?sa=X&ved=0ahUKEwiEqrDlxqrPAhUBnJQKHbKAAmcQ_BIIgQEwCg">〒151-0052　東京都渋谷区代々木神園町3-1</a>
        </p>
      </td>
    </tr>
    <tr>
      <th>対象</th>
      <td><p>技術を嗜むすべての方（職業不問）</p></td>
    </tr>
    <tr>
      <th>参加費</th>
      <td><p>無料</p></td>
    </tr>
    <tr>
      <th>主催</th>
      <td><p><a :href="index">Geek Women Japan</a></p></td>
    </tr>
    <tr>
      <th>公式twitter</th>
      <td><p><a href="https://twitter.com/geekwomenjapan">@geekwomenjapan</a></p></td>
    </tr>
    <tr>
      <th>ハッシュタグ</th>
      <td><p><a href="https://twitter.com/hashtag/gwjp2016?f=tweets&vertical=default">#gwjp2016</a><br/>
        各セッションルームごとのツイートにはこちらもご利用ください↓<br/>
        roomA:&nbsp;<a href="https://twitter.com/hashtag/gwjp2016A?f=tweets&vertical=default">#gwjp2016A</a><br/>
        roomB:&nbsp;<a href="https://twitter.com/hashtag/gwjp2016B?f=tweets&vertical=default">#gwjp2016B</a><br/>
        roomC:&nbsp;<a href="https://twitter.com/hashtag/gwjp2016C?f=tweets&vertical=default">#gwjp2016C</a><br/>
        roomD:&nbsp;<a href="https://twitter.com/hashtag/gwjp2016D?f=tweets&vertical=default">#gwjp2016D</a><br/>
        roomE:&nbsp;<a href="https://twitter.com/hashtag/gwjp2016E?f=tweets&vertical=default">#gwjp2016E</a>
      </p></td>
    </tr>
    </tbody>
  </table>
  <p class="about-text">
    参加者用の無線wifiはありません。必要な方は各自でご用意ください。電源コンセントはあります。
  </p>
</section>
<section class="what-is" id="timetable">
  <h2 class="heading">TIME TABLE</h2>
  <table class="timetable-table">
    <tbody>
    <thead>
    <tr>
      <th class="row">時間</th>
      <th class="row">Room A(417号室)</th>
      <th class="row">Room B(416号室)</th>
      <th class="row">Room C(402号室)</th>
      <th class="row">Room D(403号室)</th>
      <th class="row">Room E(405号室)</th>
    </tr>
    </thead>
    <tr>
      <th class="row">10:00-10:30</th>
      <td class="row">
        <p class="session-title">opening</p>
        <p class="session-title">スポンサーLT</p>
        <p class="session-desc">Oisix, クラスメソッド株式会社</p>
      </td>
      <td class="row"><p class="session-title">-</p></td>
      <td class="row"><p class="session-title">-</p></td>
      <td class="row"><p class="session-title">-</p></td>
      <td class="row"><p class="session-title">-</p></td>
    </tr>
    <tr>
      <th class="row">10:30-11:30</th>
      <td class="row">
        <p class="session-title">keynote 1: "How I’m working at GitHub and How I want to work as an engineer"</p>
        <p class="session-speaker">Junko Suzuki (GitHub, Inc.)</p>
        <p class="session-title">keynote 2: "Encouraging healthy communities at GitHub"</p>
        <p class="session-speaker">Danielle Leong (GitHub, Inc.)</p>
      </td>
      <td class="row"><p class="session-title">-</p></td>
      <td class="row"><p class="session-title">-</p></td>
      <td class="row"><p class="session-title">-</p></td>
      <td class="row"><p class="session-title">-</p></td>
    </tr>
    <tr>
      <th class="row">12:00-13:30</th>
      <td class="all" colspan="5">
        <p class="session-title">ランチタイム</p>
        <p class="session-desc"><a
                href="https://www.google.com/maps/d/u/0/viewer?hl=ja&authuser=0&mid=1h7XJToBfqEWG3vhzYNdAZCwGAZQ">スタッフおすすめのお店でランチ</a>したり、隣の代々木公園でお弁当をもってピクニックなど、秋の行楽をお楽しみください
        </p>
      </td>
    </tr>
    <tr>
      <th class="row">13:30-15:00</th>
      <td class="row"><p class="session-title">-</p></td>
      <td class="row">
        <p class="session-title">日本マイクロソフト株式会社スポンサーセッション</p>
        <p class="session-speaker">日本マイクロソフト株式会社　テクニカルエバンジェリスト　戸倉 彩　千代田 まどか</p>
        <p class="session-speaker">株式会社オルターブース　デザインアーキテクト　JAZUG女子部　松本典子 </p>
        <p class="session-desc">マイクロソフトは、「お客様の可能性を最大限に引き出すための支援をすること」というミッションに基づき、絶えず製品やサービスをアップデートし、より良いものにしてきました。今回は、多種多様な経験と価値観を持つ人材を受け入れるマイクロソフトのダイバーシティや、WEBデザイナー視点から見たAzureクラウドの魅力、最新のマイクロソフトテクノロジーのトレンド情報をデモを交えてお届けします。</p>
      </td>
      <td class="row">
        <p class="session-title">○○の知らない世界</p>
        <p class="session-speaker">GTUG & JAWS-UG クラウド女子会</p>
        <p class="session-desc">第1部 : GTUG&クラウド女子会のご紹介</p>
        <p class="session-desc">第2部 : GTUG Girls恒例のなごみタイム＼(^o^)／会場参加者を巻き込んで、お茶をしながらアイスブレイクします。</p>
        <p class="session-desc">第3部 : パネルディスカッション。GTUGGirlsの知らないJAWS-UG クラウドの世界＆JAWS-UG クラウド女子会の知らないGTUGGirlsの世界。</p>
        <p class="session-desc">各コミュニティの深部に迫るトークと、これまで行ってきたイベントから選りすぐりの内容をご紹介（軽め）</p>
      </td>
      <td class="row">
        <p class="session-title">成功するチームの隠し味(~14:30)</p>
        <p class="session-speaker">Atlassian　犬山奈穂</p>
        <p class="session-desc">同じ開発チームでも、バグが頻発するチームとしないチームがあるのはどうしてでしょう？また、障害をいつまでも復旧できないチームと、すぐに解決してしまうチームがあるのはどうしてでしょう？アトラシアンでは、異なる人種や性別だけでなく、性格やアイデンティといった見えない多様性の中で、パフォーマンス性の高いチーム（=成功するチーム）を築き上げる努力をしています。その「隠し味」をみなさんと共有したいと思います。</p>
      </td>
      <td class="row">
        <p class="session-title">スポンサーブース</p>
        <p class="session-desc">GitHub Japan, 株式会社ハッピーコム, パソナテック</p>
        <p class="session-title">ポスターセッション</p>
        <p class="session-desc">PyLadies Tokyo (初心者からギークまで楽しめる！女性Pythonコミュニティ)</p>
        <p class="session-desc">ラズパイ女子部 (ラズパイ女子部はじめました)</p>
        <p class="session-desc">Ladies++ (女性のためのC++コミュニティ Ladies++ の紹介)</p>
      </td>
    </tr>
    <tr>
      <th class="row">15:15-16:45</th>
      <td class="row"><p class="session-title">-</p></td>
      <td class="row">
        <p class="session-title">29歳の私が色々な人に聞いてみた『ちょうどいい働き方』 〜ところで、お仕事は好きですか？〜(~16:15)</p>
        <p class="session-speaker">グロースエクスパートナーズ株式会社　石村麻莉彩</p>
        <p class="session-desc">世の中には「女性のキャリア」という言葉があふれていますが、意外に身近な人とはそういう話をしたことがないことに気付きました。
          自社に色々なキャリアの女性エンジニアがいるので『ちょうどいい働き方』をテーマに話し合いをしてみた結果を会場の皆さんと共有したいと思います。</p>
      </td>
      <td class="row">
        <p class="session-title">「もしかして」「私たち」「「入れ替わってるー!?」」</p>
        <p class="session-speaker">Java女子部 & Rails Girls (Tokyo)</p>
        <p class="session-desc">RailsGirls
          JapanはJavaでアプリケーションを作成し、Java女子部はRailsでアプリケーションを作成しました。その時に感じた、大変だったこと、良かったこと等を発表します。</p>
      </td>
      <td class="row">
        <p class="session-title">ヒト×AI×クラウド</p>
        <p class="session-speaker">Windows女子部 & SoftLayer & Bluemix 女子部</p>
        <p class="session-desc">機械学習や人口知能、クラウド利用が浸透していく一方、ヒトの仕事が奪われてしまうのではないかということも話題になっています。しかし、本当にそうなのでしょうか。Microsoft Bot Frameworkや Watson、Open Whiskについてのお話から何故そのような技術が生まれたのか、そして、その技術を使ってヒトにしか出来ない事は何かを共有できればと思います。</p>
      </td>
      <td class="row"><p class="session-title">
        <p class="session-title">スポンサーブース</p>
        <p class="session-desc">GitHub Japan, 株式会社ハッピーコム, パソナテック</p>
        <p class="session-title">アンカンファレンス</p>
      </td>
    </tr>
    <tr>
      <th class="row">17:00-18:30</th>
      <td class="row"><p class="session-title">-</p></td>
      <td class="row">
        <p class="session-title">女性エンジニアの新しいキャリアパス～ホワイトハッカーという選択肢～(~18:00)</p>
        <p class="session-speaker">グローバルセキュリティエキスパート株式会社 小倉佳世</p>
        <p class="session-desc">インターネットに関連する技術は急速に進歩・変化し続けていますが、技術を悪用したサイバー攻撃による情報漏えい事件が後を絶ちません。セキュリティ技術者不足は深刻な状況で、国家資格を新設する等、国を挙げて育成に力を入れ始めた状況です。本セッションでは開発者が押さえておくべき攻撃手口や対策を簡単にご紹介します。ホワイトハッカーとしてのキャリアを目指すきっかけになれば幸いです。</p>
      </td>
      <td class="row">
        <p class="session-title">dots.女子部 & Ladies that UX Tokyo コラボセッション</p>
        <p class="session-speaker">dots.女子部 & Ladies that UX Tokyo</p>
        <p class="session-desc">第一部：dots.女子部 −わたしの好きな技術LTで自己紹介をします！−</p>
        <p class="session-desc">女子部の女将と若女将が好きな技術でLTします！</p>
        <p class="session-desc">第二部：Ladies that UX Tokyo「事例に学ぶ：プロジェクトで成果をあげるエンジニアとは？」</p>
        <p class="session-desc">スピーカー：鳥巣彩乃（株式会社リクルートホールディングス / CoPaNa（コパナ）プロダクトオーナー) and more!! </p>
        <p class="session-desc">モデレーター：戸田江里子 (Ladies that UX Tokyo co-founder/株式会社ハッピーコム代表取締役)</p>
      </td>
      <td class="row">
        <p class="session-title">プログラミング未経験者歓迎！Pythonでじゃんけんゲームを作ろう</p>
        <p class="session-speaker">Women Who Codes Japan & Django Girls Japan</p>
        <p class="session-desc">プログラミング未経験、初心者向け。Pythonでじゃんけんゲームを作ってブラウザで動かしてみよう。Python基礎のレクチャーを聞いて、実際にコードを書いてみましょう。ノートパソコンお持ちでない方は、手書きで書いて持ち帰る事も出来るよ！</p>
      </td>
      <td class="row">
        <p class="session-title">スポンサーブース</p>
        <p class="session-desc">GitHub Japan, 株式会社ハッピーコム, パソナテック</p>
        <p class="session-title">アンカンファレンス</p>
      </td>
    </tr>
    <tr>
      <th class="row">18:40-19:00</th>
      <td class="row"><p class="session-title">-</p></td>
      <td class="row">
        <p class="session-title">スポンサーLT</p>
        <p class="session-desc">アットウェア, PayPal, ハッピーコム</p>
        <p class="session-title">closing</p>
      </td>
      <td class="row"><p class="session-title">-</p></td>
      <td class="row"><p class="session-title">-</p></td>
      <td class="row"><p class="session-title">-</p></td>
    </tr>
    <tr>
      <th class="row">20:00-</th>
      <td class="all" colspan="5"><p class="session-title">別会場にて懇親会</p></td>
    </tr>
    </tbody>
  </table>
</section>
<section class="what-is">
  <img class="floor-map" src="@/static/conference/2016/map.png"/>
</section>
<section class="about" id="speaker">
  <h2 class="heading">SPEAKER</h2>
  <br>
  <h3 class="sub-heading">keynote</h3>
  <br>
  <figure>
    <img src="@/static/conference/2016/speaker/junko.png" alt="Junko Suzuki" title="Junko Suzuki">
    <figcaption>Junko Suzuki (GitHub)</figcaption>
  </figure>
  <figure>
    <img src="@/static/conference/2016/speaker/danielle.jpg" alt="Danielle Leong" title="Danielle Leong">
    <figcaption>Danielle Leong (GitHub)</figcaption>
  </figure>
  <br>
  <h3 class="sub-heading">sponsor session</h3>
  <br>
  <figure>
    <img src="@/static/conference/2016/speaker/AyaTokura.png" alt="戸倉彩" title="戸倉彩">
    <figcaption>戸倉彩 (日本マイクロソフト株式会社)</figcaption>
  </figure>
  <figure>
    <img src="@/static/conference/2016/speaker/MadokaChiyoda.png" alt="千代田まどか" title="千代田まどか">
    <figcaption>千代田まどか (日本マイクロソフト株式会社)</figcaption>
  </figure>
  <figure>
    <img src="@/static/conference/2016/speaker/NorikoMatsumoto.png" alt="松本典子" title="松本典子">
    <figcaption>松本典子 (JAZUG女子部)</figcaption>
  </figure>
  <figure>
    <img src="@/static/conference/2016/speaker/ishimura.jpg" alt="石村麻莉彩" title="石村麻莉彩">
    <figcaption>石村麻莉彩 (グロースエクスパートナーズ株式会社)</figcaption>
  </figure>
  <figure>
    <img src="@/static/conference/2016/speaker/naho.jpeg" alt="犬山奈穂" title="犬山奈穂">
    <figcaption>犬山奈穂 (Atlassian)</figcaption>
  </figure>
  <br>
  <h3 class="sub-heading">共催コミュニティ</h3>
  <br>
  <a href="https://javajo.doorkeeper.jp/"><img class="community-image"
                                               src="@/static/conference/2016/community/javajo.png" alt="Java女子部"
                                               title="Java女子部"></a>
  <a href="http://www.gtuggirls.jp/"><img class="community-image" src="@/static/conference/2016/community/gtug.png"
                                          alt="GTUG Girls" title="GTUG Girls"></a>
  <a href="http://ladiesthatux.com/"><img class="community-image" src="@/static/conference/2016/community/ladiesux.png"
                                          alt="Ladies the UX Tokyo" title="Ladies the UX Tokyo"></a>
  <a href="https://djangogirls.org/tokyo/"><img class="community-image"
                                                src="@/static/conference/2016/community/django.png"
                                                alt="Django Girls Japan" title="Django Girls Japan"></a>
  <a href="http://tokyo.pyladies.com/"><img class="community-image"
                                            src="@/static/conference/2016/community/pyladies.png" alt="PyLadies Tokyo"
                                            title="PyLadies Tokyo"></a>
  <a href="https://www.facebook.com/groups/WindowsGirls/"><img class="community-image"
                                                               src="@/static/conference/2016/community/windows.png"
                                                               alt="Windows女子部" title="Windows女子部"></a>
  <br>
  <br>
  <a href="http://raspberrypiforwomen.connpass.com/"><img class="community-image"
                                                          src="@/static/conference/2016/community/raspi.png"
                                                          alt="ラズパイ女子部" title="ラズパイ女子部"></a>
  <a href="http://railsgirls.jp/"><img class="community-image" src="@/static/conference/2016/community/railsgirls.png"
                                       alt="Rails Girls(Tokyo)" title="Rails Girls(Tokyo)"></a>
  <a href="https://cloudgirl.doorkeeper.jp/"><img class="community-image"
                                                  src="@/static/conference/2016/community/jaws.png"
                                                  alt="JAWS-UG クラウド女子会" title="JAWS-UG クラウド女子会"></a>
  <a href="http://jslug.jp/node/34"><img class="community-image"
                                         src="@/static/conference/2016/community/SoftlayerBluemix.png"
                                         alt="SoftLayer & Bluemix 女子部" title="SoftLayer & Bluemix 女子部"></a>
  <a href="https://eventdots.jp/conference2016/community/dotsgirls"><img class="community-image"
                                                                         src="@/static/conference/2016/community/dots.png"
                                                                         alt="dots.女子部" title="dots.女子部"></a>
  <a href="http://www.meetup.com/ja-JP/Women-Who-Code-Tokyo/"><img class="community-image"
                                                                   src="@/static/conference/2016/community/wwc.png"
                                                                   alt="Women Who Codes Japan"
                                                                   title="Women Who Codes Japan"></a>
  <a href="https://ladiescpp.github.io/"><img class="community-image" src="@/static/conference/2016/community/cpp.png"
                                              alt="Ladies" title="Ladies++"></a>
  <br>
</section>
<section class="what-is">
  <h2 class="heading" id="sponsor">SPONSOR</h2>
  <br>
  <h3 class="sub-heading">Diamond</h3>
  <br>
  <div class="sponsor-img">
    <a href="https://www.microsoft.com/ja-jp/">
      <img class="sponsor-img-l" src="@/static/conference/2016/sponsor/microsoft.png" alt="Microsoft" title="Microsoft">
    </a>
  </div>
  <br>
  <h3 class="sub-heading">Sapphire</h3>
  <br>
  <div class="sponsor-img">
    <a href="https://github.com/about"><img class="sponsor-img-m" src="@/static/conference/2016/sponsor/GitHub.png" alt="GitHub" title="GitHub"></a>
  </div>
  <div class="sponsor-img">
    <a href="https://www.happycom.co.jp/aboutus/"><img class="sponsor-img-m" src="@/static/conference/2016/sponsor/happyDigital.png" alt="ハッピーコム" title="ハッピーコム"></a>
  </div>
  <div class="sponsor-img">
    <a href="http://www.bbs.co.jp/">
      <img class="sponsor-img-m" src="@/static/conference/2016/sponsor/bbs.png" alt="株式会社ビジネスブレイン太田昭和（BBS）" title="株式会社ビジネスブレイン太田昭和（BBS）">
    </a>
  </div>
  <div class="sponsor-img">
    <a href="http://www.atware.co.jp/#sprits">
      <img class="sponsor-img-m" src="@/static/conference/2016/sponsor/atware.png" alt="アットウェア" title="アットウェア">
    </a>
  </div>
  <div class="sponsor-img">
    <a href="https://www.pasonatech.co.jp/">
      <img class="sponsor-img-m" src="@/static/conference/2016/sponsor/PasonaTech.jpg" alt="パソナテック" title="パソナテック">
    </a>
  </div>
  <div class="sponsor-img">
    <a href="https://www.atlassian.com/">
      <img class="sponsor-img-m" src="@/static/conference/2016/sponsor/atlassian.png" alt="Atlassian" title="Atlassian">
    </a>
  </div>
  <div class="sponsor-img">
    <a href="http://gxp.co.jp/">
      <img class="sponsor-img-m" src="@/static/conference/2016/sponsor/gxp.png" alt="グロースエクスパートナーズ株式会社" title="グロースエクスパートナーズ株式会社">
    </a>
  </div>
  <br>
  <h3 class="sub-heading">Emerald</h3>
  <br>
  <div class="sponsor-img">
    <a href="https://www.paypal.com/jp/webapps/mpp/home">
      <img class="sponsor-img-s" src="@/static/conference/2016/sponsor/paypal.png" alt="PayPal" title="PayPal">
    </a>
  </div>
  <div class="sponsor-img">
    <a href="http://focusrite.in/"><img class="sponsor-img-s" src="@/static/conference/2016/sponsor/focusrite.png" alt="focusrite" title="focusrite"></a>
  </div>
  <div class="sponsor-img">
    <a href="http://www.serverworks.co.jp/">
      <img class="sponsor-img-s" src="@/static/conference/2016/sponsor/serverworks.png" alt="サーバーワークス" title="サーバーワークス">
    </a>
  </div>
  <br>
  <h3 class="sub-heading">Quartz</h3>
  <br>
  <div class="sponsor-img">
    <a href="http://spicelife.jp/">
      <img src="@/static/conference/2016/sponsor/spicelife.png" alt="spicelife" title="spicelife" class="sponsor-img-s">
    </a>
  </div>
  <div class="sponsor-img">
    <a href="https://tmix.jp/">
      <img src="@/static/conference/2016/sponsor/tmix.png" alt="TMIX" title="TMIX" class="sponsor-img-s">
    </a>
  </div>
  <div class="sponsor-img">
    <a href="https://www.oisix.com/OtameshiTouroku.lp.g6--top--top-shinki_domo_b__html.htm?null">
      <img src="@/static/conference/2016/sponsor/Oisix.png" alt="Oisix" title="Oisix" class="sponsor-img-s">
    </a>
  </div>
  <div class="sponsor-img">
    <a href="https://www.salesforce.com/jp/">
      <img src="@/static/conference/2016/sponsor/salesforce.png" alt="salesforce" title="salesforce" class="sponsor-img-s">
    </a>
  </div>
  <br>
  <h3 class="sub-heading">Amber</h3>
  <br>
  <div class="sponsor-img">
    <a href="https://www.happycom.co.jp/"><img class="sponsor-img-s" src="@/static/conference/2016/sponsor/happyDigital.png" alt="Happyデジタル" title="Happyデジタル"></a>
  </div>
  <div class="sponsor-img">
    <a href="http://classmethod.jp/"><img class="sponsor-img-s" src="@/static/conference/2016/sponsor/classmethod.png" alt="クラスメソッド株式会社" title="クラスメソッド株式会社"></a>
  </div>
  <br>
  <h3 class="sub-heading">個人スポンサー</h3>
  <br>
  <figure>
    <a href="https://www.evangelism.jp/"><img src="@/static/conference/2016/sponsor/nagasawa.jpg" alt="長沢智治" title="長沢智治"></a>
    <figcaption>長沢智治<br>(Sr. Evangelist at Atlassian)<br>_</figcaption>
  </figure>
  <figure>
    <img src="@/static/conference/2016/sponsor/suzuki.jpeg" alt="鈴木雄介" title="鈴木雄介">
    <figcaption>鈴木雄介<br>（グロースエクスパートナーズ株式会社 執行役員<br>/日本Javaユーザーグループ 会長）</figcaption>
  </figure>
</section>
<section class="social">
  <a href="https://twitter.com/share" class="twitter-share-button" data-url="http://geekwomenjapan.github.io/"
     data-text="女性エンジニアの集まるカンファレンスイベント運営団体「Geek Women Japan」" data-via="geekwomenjapan"
     data-hashtags="geekwomenjapan">Tweet</a>
  <script>
    !function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
      if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + '://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);
      }
    }(document, 'script', 'twitter-wjs');
  </script>
  <!-- はてブ数表示する場合はこちら <a href="http://b.hatena.ne.jp/entry/http://geekwomenjapan.github.io/" class="hatena-bookmark-button" data-hatena-bookmark-title="Geek Women Japan" data-hatena-bookmark-layout="simple-balloon" title="このページをはてなブックマークに追加"><img src="https://b.st-hatena.com/images/entry-button/button-only@2x.png" alt="このページをはてなブックマークに追加" width="20" height="20" style="border: none;" /></a><script type="text/javascript" src="https://b.st-hatena.com/js/bookmark_button.js" charset="utf-8" async="async"></script> -->
  <a href="http://b.hatena.ne.jp/entry/http://geekwomenjapan.github.io/" class="hatena-bookmark-button"
     data-hatena-bookmark-title="Geek Women Japan" data-hatena-bookmark-layout="simple"
     title="このエントリーをはてなブックマークに追加"><img src="https://b.st-hatena.com/images/entry-button/button-only@2x.png"
                                       alt="このエントリーをはてなブックマークに追加" width="20" height="20"
                                       style="border: none;"/></a>
  <script type="text/javascript" src="https://b.st-hatena.com/js/bookmark_button.js" charset="utf-8"
          async="async"></script>
</section>
<section class="contact">
  <a href="https://twitter.com/geekwomenjapan" class="icon ">
    <v-icon >fab fa-twitter</v-icon>
    <span class="label">Twitter</span>
  </a>
  <a href="https://www.facebook.com/geekWomenJapan/" class="icon">
    <v-icon >fab fa-facebook-f</v-icon>
    <span class="label">Facebook</span>
    </a>
  <a href="mailto:geekwomen.japan@gmail.com" class="icon">
    <v-icon >fas fa-envelope</v-icon>
    <span class="label">E-mail</span>
  </a>
</section>
<footer class="footer">
  © <a :href="index">Geek Women Japan</a>
</footer>
</body>
</html>
</template>
<script>
export default {
  layout: 'conference',
  head(){
    return{
      title: "Geek Women Japan 2016",
      meta: [
      { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0' },
      { hid: 'og:title', name: 'og:title', content: 'Geek Women Japan 2016' },
      { hid: 'og:description', name: 'description', content: 'Geek Women Japan 2016は女性エンジニアのためのカンファレンスです。11/3(祝)新宿・国立オリンピック記念青少年総合センターで開催！' } ,   
      { hid: 'og:image', name: 'og:image', content: 'http://geekwomenjapan.github.io/images/conference2016/logo.png' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:url', name: 'og:url', content: 'http://geekwomenjapan.github.io/conference2016/' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Geek Women Japan' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@geekwomenjapan' }
      ],
      link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:400,700' }
      ]
    }
  }
}
</script>
<style scoped>

@charset "UTF-8";

html {
  font-size: 62.5%;
}

*, *::before, *::after {
  box-sizing: border-box;
}

body {
  background-color: #fff;
  background-size: cover;
  color: #666;
  text-align: center;
  font-size: 1.4rem;
  font-family: 'Raleway', "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
}

#nav {
  background-color: inherit;
  text-align: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 10000;
  cursor: default;
}

/*#nav a {*/
/*color: #5dbda4;*/
/*text-decoration: none;*/
/*font-family: 'Raleway', "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;*/
/*font-size: 1.5rem;*/
/*}*/
#nav ul {
  margin-bottom: 0;
}

#nav li {
  display: inline-block;
  margin: 5px;
}

#nav a {
  position: relative;
  display: block;
  color: #5dbda4;
  text-decoration: none;
  outline: 0;
}

#nav a:hover {
  color: #5dbda4 !important;
}

#nav a.active:before {
  content: '';
  display: block;
  position: absolute;
  bottom: -0.6em;
  left: 50%;
  margin-left: -0.75em;
  border-left: solid 0.75em transparent;
  border-right: solid 0.75em transparent;
  border-top: solid 0.6em #282828;
}

.header {
  padding: 100px 30px 80px;
}

.site-title-sub {
  margin: 0 0 30px;
  letter-spacing: 1px;
  font-size: 2.2rem;
}

.site-title-sub::before,
.site-title-sub::after {
  content: '';
  display: inline-block;
  width: 140px;
  height: 2px;
  margin: 0 30px;
  background-color: #ffffff;
  vertical-align: middle;
}

.site-title {
  margin: 50px 0 40px;
  font-size: 6rem;
  color: #5dbda4;
}

.site-logo {
  display: inline-block;
  width: 250px;
}

.site-description {
  margin-bottom: 50px;
  color: #888888;
  font-size: 1.6rem;
}

.button {
  margin: 10px;
  display: inline-block;
  width: 200px;
  padding: 20px;
  border-radius: 4px;
  background-color: #666;
  color: #fff;
  text-decoration: none;
  letter-spacing: 1px;
  font-size: 2rem;
}

.button:hover {
  opacity: 0.9;
}

.button-showy {
  background-color: #5dbda4;
}

.button-showy:hover {
  background-color: #ff827d;
}

.what-is {
  padding: 30px 30px;
  background-color: #cafff1;
  width: 100%;
}

.about {
  padding: 30px 30px;
  background-color: #fff;
  color: #5dbda4;
}

.heading {
  color: #5dbda4;
  position: relative;
  display: inline-block;
  margin: 30px 0 15px;
  padding-bottom: 15px;
  letter-spacing: 2px;
  font-size: 4rem;
}

.heading::before,
.heading::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  border-bottom: 1px solid #5dbda4;
}

.heading::before {
  bottom: 5px;
}

.sub-heading {
  color: #5dbda4;
  position: relative;
  display: inline-block;
  margin: 30px 0 15px;
  padding-bottom: 15px;
  letter-spacing: 2px;
  font-size: 2.5rem;
}

.about-paragraph {
  display: block;
}

.about-text-header,
.about-text-strong,
.about-text {
  display: block;
  text-align: center;
  width: 52%;
  margin: 14px auto;
  font-size: 1.5rem;
}

.about-text-header {
  font-weight: 600;
  font-size: 2rem;
}

.about-text-strong {
  font-size: 1.75rem;
}

table.about-table {
  width: 80%;
  margin: 0 auto;
  border-collapse: separate;
  border-spacing: 0 15px;
  font-size: 1.5rem;
  color: #666;
}

table.about-table th,
table.about-table td {
  padding: 10px;
}

table.about-table th {
  background: #5dbda4;
  vertical-align: middle;
  text-align: left;
  width: 110px;
  overflow: visible;
  position: relative;
  color: #fff;
  font-weight: normal;
  font-size: 15px;
}

table.about-table th:after {
  left: 100%;
  top: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-color: rgba(136, 183, 213, 0);
  border-left-color: #5dbda4;
  border-width: 10px;
  margin-top: -10px;
}

/* firefox */
@-moz-document url-prefix() {
  table.about-table th::after {
    float: right;
    padding: 0;
    left: 30px;
    top: 10px;
    content: " ";
    height: 0;
    width: 0;
    position: relative;
    pointer-events: none;
    border: 10px solid transparent;
    border-left: #5dbda4 10px solid;
    margin-top: -10px;
  }
}

table.about-table td {
  background: #f8f8f8;
  width: 360px;
  padding-left: 20px;
}

.contact {
  width: 100%;
}

.icon {
  text-decoration: none;
}

.icon:before {
  display: inline-block;
  font-family: FontAwesome;
  font-size: 1.25em;
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  color: #5dbda4;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon > .label {
  display: none;
}

.footer {
  padding: 12px 0;
  font-size: 1.3rem;
}

table.timetable-table {
  font-size: 1.3rem;
  margin: 0 auto;
  border-collapse: separate;
  border-spacing: 0px 1px;
  color: #999;
  background-color: #ffffff;
}

table.timetable-table th {
  padding: 12px;
  vertical-align: middle;
  text-align: center;
  border-bottom: #999 1px solid;
  color: #fff;
  width: 5%;
}

table.timetable-table th.row {
  border-right: #999 1px solid;
  background: #5dbda4;
}

table.timetable-table td {
  padding: 1.3rem;
  vertical-align: middle;
  text-align: center;
  border-bottom: #999 1px solid;
  border-right: #999 1px solid;
  width: 10%;
}

.session-title {
  font-weight: bold;
}
.session-speaker {
}
.session-desc {
  font-size: 1rem;
}

table.timetable-table td .all {
  width: 50%;
}

.speakers {
  width: 50%;
  height: 230px;
  margin: 0 auto;
  list-style: none;
  padding-left: 0;
  padding-top: 10px;
  padding-bottom: 10px;
}

.keynote-speaker {
  width: 50%;
  position: relative;
  margin: 0 auto;
  float: left;
}

figure {
  display: inline-block;
  margin: 0px 3px 7px 0px;
  background-color: transparent;
}
figure img {
  display: block;
  height: 175px;
  margin: 0px auto 3px auto;
}
figcaption {
  font-size: 0.9em;
  text-align: center;
}

.speaker-name {
  font-weight: bold;
}

.speaker-desc {
  width: 80%;
  display: inline-block;
}
.sponsor-img{
  display:inline-block;
}
.sponsor-img-l,
.sponsor-img-m,
.sponsor-img-s {
  padding: 10px;
}

.sponsor-img-l {
  height: 125px;
}

.sponsor-img-m {
  height: 100px;
}

.sponsor-img-s {
  height: 75px;
}

.call-for-sponsor {
  margin: 10px;
  display: inline-block;
  padding: 20px;
  border-radius: 4px;
  background-color: #666;
  color: #fff;
  text-decoration: none;
  letter-spacing: 1px;
  font-size: 2rem;
}

@media (max-width: 1024px) {
  body {
    background-image: none;
  }
}

@media (max-width: 768px) {
  .site-title-sub::before,
  .site-title-sub::after {
    display: block;
    width: 80%;
    margin: 10px auto;
  }

  .site-title-sub {
    font-size: 1.7rem;
  }

  .site-title {
    margin-top: 35px;
    font-size: 3rem;
  }

  .site-description {
    font-size: 1.3rem;
  }

  .header {
    padding-top: 100px;
  }

  .button:hover {
    opacity: 1;
  }

  .what-is {
    padding: 15px;
  }

  .heading {
    font-size: 2.5rem;
  }

  body {
    font-size: 1.3rem;
  }

  .about-paragraph {
    width: 100%;
  }

  .about-text-header,
  .about-text-strong,
  .about-text {
    width: 100%;
  }

  .keynote-speaker,
  .speaker {
    width: 100%;
  }

  .community-image {
    width: 40%;
  }

  .sponsor-img {
    display:block;
  }

  .sponsor-img-l {
    height: 90%;
    width: 90%;
  }

  .sponsor-img-m {
    height: 75%;
    width: 75%;
  }

  .sponsor-img-s {
    height: 60%;
    width: 60%;
  }

  table.about-table {
    width: 100%;
  }

  table.timetable-table {
    display: block;
    list-style: none;
  }

  table.timetable-table thead {
    display: none;
  }

  table.timetable-table tbody {
    width: 100%;
    display: block;
  }

  table.timetable-table tbody tr {
    width: 100%;
    display: block;
    margin-bottom: 1.5em;
  }

  table.timetable-table tbody th,
  table.timetable-table tbody td {
    width: 100%;
    display: list-item;
    border: none;
  }

  table.timetable-table tbody th {
    font-size: 1.7rem;
    margin-bottom: 5px;
    list-style-type: none;
    color: #fff;
    background: #5dbda4;
  }

  table.timetable-table tbody td {
    width: 90%;
    font-size: 1.5rem;
    text-align: left;
    margin-left: 20px;
    padding: 0;
  }

  table.timetable-table tbody td.all {
    width: 100%;
  }

  .session-title {
    font-weight: bold;
    font-size: 1.5rem;
  }

  .session-desc {
    font-size: 1.5rem;
  }

  table.timetable-table tbody td.row:nth-of-type(1)::before {
    content: "[Room A] ";
  }

  table.timetable-table tbody td.row:nth-of-type(2)::before {
    content: "[Room B] ";
  }

  table.timetable-table tbody td.row:nth-of-type(3)::before {
    content: "[Room C] ";
  }

  table.timetable-table tbody td.row:nth-of-type(4)::before {
    content: "[Room D] ";
  }

  table.timetable-table tbody td.row:nth-of-type(5)::before {
    content: "[Room E] ";
  }

  .floor-map {
    width: 100%;
  }

  .speakers {
    width: 100%;
  }

  .speaker {
    width: 100%;
  }
}
</style>

