<template lang="html">
<div>
	<header
		id="header"
		class="pt100 pb30 mb70"
		:style="{ 'background-image': 'url(' + staticImage + ')'}">
			<div class="contents">
					<h1 class="mb30">
						<img src="@/static/conference/2017/hero_logo.png" alt="Geek Women Japan x Microsoft">
					</h1>
					<h2 class="fB mb10">Geek になりたい人のための<span class="br_m">ミニカンファ</span></h2>
					<p class="fB">2017 年 3 月 4 日 (土) 13:00 ～ | 品川</p>
					<p><a href="https://eventdots.jp/event/611429" target="_blank" class="button">参加登録</a></p>
					<nav id="nav">
							<ul>
									<li><a href="#" v-scroll-to="'#about_link'">About</a></li>
									<li><a href="#" v-scroll-to="'#timetable'">Timetable</a></li>
									<li><a href="#" v-scroll-to="'#speaker'">Speaker</a></li>
									<li><a href="#" v-scroll-to="'#nursery'">for Parents</a></li>
									<li class="last">
										<nuxt-link to="/">Geek Women Japan</nuxt-link>
								</li>
							</ul>
					</nav>
			</div>
	</header>
    <!--// about -->
    <div id="about_link"></div>
    <section id="about">
        <div class="contents">
            <h2 class="fB mb40 ttl">技術に縛られない女性エンジニアの輪を形成するために<span class="br_p">エンジニア女子が中心となって</span><span class="br_p">ギークなセッションを繰り広げるカンファレンスです</span></h2>
            <p class="mb30 sub">携わる言語や技術に関わらず、新しい知識や発見をしながら女性エンジニアの輪を広めてもらいたい。<br> そんな想いから誕生した Geek Women Japan は今回 Microsoft とコラボします!<br>
                <span class="br_p">幅広く最新の技術情報を知りたい、という方をはじめ、社内外で活躍する女性エンジニアとの交流を持ちたい方、奮ってご参加ください。</span> 各分野のエキスパートが集結して様々なセッションをお届けします。女性だけでなく、男性もご参加いただけます! </p>

            <table>
                <tr>
                    <th>日時</th>
                    <td>2017 年 3 月 4 日 (土)　13 時～</td>
                </tr>
                <tr>
                    <th>会場</th>
                    <td><a href="https://www.microsoft.com/ja-jp/mscorp/branch/sgt.aspx" target="_blank">日本マイクロソフト株式会社 品川本社</a>　セミナールーム</td>
                </tr>
                <tr>
                    <th>対象</th>
                    <td>技術を嗜むすべての方 (性別・職業不問)</td>
                </tr>
                <tr>
                    <th>参加費</th>
                    <td>無料</td>
                </tr>
                <tr>
                    <th>主催</th>
                    <td>Geek Women Japan × Microsoft</td>
                </tr>
            </table>

            <div class="nursery_innner_btn mt20 mb50">
                <p><a href="#nursery">託児サービスのご利用について</a></p>
            </div>

            <ul class="SNS mt30 mb5">
                <li>
                    <a href="https://twitter.com/geekwomenjapan" target="_blank"><img src="@/static/conference/2017/icon_twitter.png"></a>
                </li>
                <li>
                    <a href="https://www.facebook.com/geekWomenJapan/" target="_blank"><img src="@/static/conference/2017/icon_facebook.png"></a>
                </li>
                <li>
                    <a href="mailto:geekwomen.japan@gmail.com" target="_blank"><img src="@/static/conference/2017/icon_mail.png"></a>
                </li>
            </ul>
            <p class="tC">ハッシュタグ: <a href="https://twitter.com/hashtag/gwjpms?f=tweets&vertical=default" class="fB" target="_blank">#gwjpms</a></p>
        </div>
        <ul class="photo mt35">
            <li><img src="@/static/conference/2017/photo01.jpg"></li>
            <li><img src="@/static/conference/2017/photo02.jpg"></li>
            <li><img src="@/static/conference/2017/photo03.jpg"></li>
            <li><img src="@/static/conference/2017/photo04.jpg"></li>
            <li><img src="@/static/conference/2017/photo05.jpg"></li>
            <li><img src="@/static/conference/2017/photo06.jpg"></li>
        </ul>
        <p class="tC fs10 mb30">※Geek Women Japan 2016 の様子</p>
        <!--// MVP -->
        <section id="mvp" class="mb35">
            <h2 class="fB pt10 pb30">オープン時代をリードする女性エンジニアを <br>Microsoft MVP として大歓迎します</h2>
            <div class="description clfix">
                <img src="@/static/conference/2017/mvp.png" class="mvp_img">
                <p>“Microsoft MVP” は、あらゆるユーザーが最大限にマイクロソフト製品を活用できるよう、インフルエンサーとして世の中に広く啓もう、情報を共有した「個人」への功績に、マイクロソフトが感謝の意を表して授与する特別なアワードです。いち早く世の中の技術や有用な情報をキャッチし、自らが発信源となりコミュニティに素早く拡散する活動が評価のポイントとなります。</p>
                <p>なお、この称号は受賞後1年間有効で、受賞者はこの1年間で「Microsoft MVP」と名乗れるだけでなく、多くの特典を享受でき、幅広いリレーション構築の機会が提供されます。中でも、米国本社で開催される MVP Global Summit にて、社員さえまだ知らない情報を手に入れたり、製品開発チームとの交流が生まれることで、開発中の製品へのフィードバックが反映されたり、という経験ができるのはMVP受賞の魅力のひとつです。</p>
                <p>MVPプログラムでは自己推薦だけでなく、社内外での推薦制度を設けておりますので、我こそは！という方はもちろんのこと、周りで MVP の受賞にふさわしい方がいらしたら是非ご推薦ください。</p>
            </div>
            <div class="contact clfix">
                <h3 class="fB">お問い合わせ</h3>
                <ul>
                    <li>Microsoft MVP アワード プログラムに関するお問い合わせ | <a href="mailto:jpmvpnd@microsoft.com">Japan MVP Nomination Desk</a></li>
                    <li><a href="https://mvp.microsoft.com/ja-jp" target="_blank">Microsoft MVP アワード プログラムに関する情報</a></li>
                    <li><a href="http://aka.ms/to-be-an-mvp" target="_blank">MVP アワードへの自薦/他薦</a></li>
                </ul>
            </div>
        </section>
        <!-- MVP //-->
    </section>
    <!-- about //-->
    <!--// time table -->
    <section id="timetable">
        <div class="contents pb20">
            <h2 class="tC fs200 fB pt50 pb25">Timetable</h2>
            <table class="timetable-table">
                <tbody>
                    <thead>
                        <tr>
                            <th scope="col" class="row">Time</th>
                            <th scope="col" class="row fB">Room A <span>(セッション)</span></th>
                            <th scope="col" class="row fB">Room B <span>(セッション)</span></th>
                            <th scope="col" class="row fB">Room C+D <span>(ハンズオン)</span></th>
                        </tr>
                    </thead>
                    <tr>
                        <th scope="row" class="row">13:00-13:50</th>
                        <td class="row">
                            <p class="session-title"><a href="#Session1-1">ビジネス現場におけるデータ活用 〜Pythonを添えて〜</a></p>
                            <p class="session-speaker">対象技術:分析<br>セッション レベル:中級～上級<br>スピーカー:真嘉比 愛</p>
                        </td>
                        <td class="row">
                            <p class="session-title"><a href="#Session2-1">モダンWeb開発におけるVSCode活用TIPS</a></p>
                            <p class="session-speaker">対象技術:VSCode/モダンWeb開発全般<br>セッション レベル:初級～中級<br>スピーカー:木村茉由</p>
                        </td>
                        <td class="row">
                            <p class="session-title"><a href="#Session3-1">超入門！Power BI はじめの一歩</a></p>
                            <p class="session-speaker">対象技術:Power BI<br>セッション レベル:初級<br>スピーカー:後藤 由記子</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" class="row">14:00-14:50</th>
                        <td class="row">
                            <p class="session-title"><a href="#Session1-2">AI を簡単に使える時代がやってきた！開発者のための AI 活用入門</a></p>
                            <p class="session-speaker">対象技術:BigData/機械学習<br>セッション レベル:初級<br>スピーカー:大森彩子</p>
                        </td>
                        <td class="row">
                            <p class="session-title"><a href="#Session2-2">Android / iOS の比較セッション</a></p>
                            <p class="session-speaker">対象技術:Android / iOS<br>セッション レベル:初級～中級<br>スピーカー:<br>城井優 / namiki / 須藤槙 / なめきちはる
                            </p>
                        </td>
                        <td class="row">
                            <p class="session-title"><a href="#Session3-2">超簡単 Visual Studio Code ではじめる Angular 2</a></p>
                            <p class="session-speaker">対象技術:Visual Studio<br>セッション レベル:初級<br>スピーカー:佐川 夫美雄 / さっくる(本間 咲来)</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" class="row">15:00-15:50</th>
                        <td class="row">
                            <p class="session-title"><a href="#Session1-3">IT業界で働くためのtips</a></p>
                            <p class="session-speaker">対象技術:不問<br>セッション レベル:初級<br>スピーカー:みほ / 犬山奈穂</p>
                        </td>
                        <td class="row">
                            <p class="session-title"><a href="#Session2-3">SIerもはじめるわたしたちのDevOps</a></p>
                            <p class="session-speaker">対象技術:DevOps<br>セッション レベル:中級<br>スピーカー:しょぼちむ</p>
                        </td>
                        <td class="row">
                            <p class="session-title"><a href="#Session3-3">Xamarin ハンズオン<br>(Xamarin を実際に触ってみてアプリを作ってみよう！)</a></p>
                            <p class="session-speaker">対象技術:Xamarin<br>セッション レベル:初級<br>スピーカー:千代田まどか</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" class="row">16:00-16:50</th>
                        <td class="row">
                            <p class="session-title"><a href="#LT">LT 大会</a></p>
                            <p class="session-speaker">対象技術:不問<br>セッション レベル:初級～上級<br>スピーカー:<br>まーや / gocci / ちゃんとく / 戸倉彩 /片寄里菜</p>
                        </td>
                        <td class="row">
                            <p class="session-title"><a href="#Session2-4">使いたくなるクラウド、選べるクラウド！</a></p>
                            <p class="session-speaker">対象技術:AWS/Azure/Bluemix<br>セッション レベル:初級～中級<br>スピーカー:大平かづみ</p>
                        </td>
                        <td class="row">
                            <p class="session-title"><a href="#Session3-4">Dockerで 今日からはじめる Container体験</a></p>
                            <p class="session-speaker">対象技術:Docker<br>セッション レベル:初級<br>スピーカー:得上 竜一</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" class="row">17:00-18:30</th>
                        <td class="row">
                            <p class="session-title sub">-</p>
                        </td>
                        <td class="row">
                            <p class="session-title sub">-</p>
                        </td>
                        <td class="row">
                            <p class="session-title sub">懇親会</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <section id="map">
                <p class="map tC mt20 mb15"><img src="@/static/conference/2017/floormap.png" alt="フロア マップ"></p>
            </section>
            <!--// speaker -->
            <section id="speaker" class="pb30">
                <ul>
                    <li id="Session1-1" class="list">
                        <h3 class="fB"><span class="time">Session A-1 | 13:00-13:50</span><br>ビジネス現場におけるデータ活用 〜Pythonを添えて〜</h3>
                        <div class="inner_box clfix">
                            <div class="speaker_photo"><img src="@/static/conference/2017/speakers/amacbee.png" alt="真嘉比 愛"></div>
                            <div class="profile fB pb10 mb10">
                                <p class="pb10"><span class="name">真嘉比 愛</span> <span class="fB">（<a href="https://twitter.com/a_macbee">@a_macbee</a>）</span>
                                    <!--span class="fB">(所属コミュニティ)</span-->
                                </p>
                                <p class="sub"><span class="highlight">&nbsp;対象技術&nbsp;</span>&nbsp;分析　<span class="highlight">&nbsp;セッション レベル&nbsp;</span>&nbsp;中級～上級</p>
                            </div>
                            <div class="description">
                                <h4>Title : 分析とサービス</h4>
                                <p>
                                    2016年はAlphaGoの活躍を筆頭に人工知能・機械学習が大きな注目を集めた1年でした．<br> しかし世の中には，未だ活用されないまま眠っているデータの山が数多く存在しています．
                                    <br> 本セッションでは，「データはあるけどどう活用すれば良いのか分からない」という方を対象に，いくつかの事例を交えながら，データをどう料理してビジネスに活かすのか，データ分析のはじめの一歩について紹介します．
                                </p>
                            </div>
                        </div>
                    </li>
                    <li id="Session1-2" class="list">
                        <h3 class="fB"><span class="time">Session A-2 | 14:00-14:50</span><br>AI を簡単に使える時代がやってきた！開発者のための AI 活用入門</h3>
                        <div class="inner_box clfix">
                            <div class="speaker_photo"><img src="@/static/conference/2017/speakers/AyakoOmori.jpg" alt="大森 彩子 "></div>
                            <div class="profile fB pb10 mb10">
                                <p class="pb10"><span class="name">大森 彩子</span>　<span class="fB">(<a href="https://twitter.com/ayako_omori">@ayako_omori</a>)</span><br><span class="fB">日本マイクロソフト株式会社</span></p>
                                <p class="sub"><span class="highlight">&nbsp;対象技術&nbsp;</span>&nbsp;BigData/機械学習　<span class="highlight">&nbsp;セッション レベル&nbsp;</span>&nbsp;初級</p>
                            </div>
                            <div class="description">
                                <h4>Title : 開発者としての AI との向き合い方: AI の適用範囲や手軽に利用できる AI の活用方法について</h4>
                                <p>人間の認知機能をコンピューターで実現する AI (人工知能)。<br> 画像・動画から説明やタグ付け、人間の顔認証・表情解析を行う画像処理や、話し言葉(自然言語)から文意やキーワードを分析する自然言語処理など、これまで膨大なデータを元にしたモデリングが必要だった AI が Web API 経由で簡単に利用できる時代になりました。<br> その一方で、AI や機械学習 (マシンラーニング、ML) といった言葉がバズワードとなって、顧客からの
                                    "AIをシステムに取り入れたい" という漠然とした要望に出会うことも増えているのではないでしょうか。<br> こちらのセッションでは、開発者としてどのように AI と向かい合っていくのか、AI の適用範囲や手軽に利用できる AI の活用方法について、実例を交えながらご紹介いたします。</p>
                            </div>
                        </div>
                    </li>
                    <li id="Session1-3" class="list">
                        <h3 class="fB"><span class="time">Session A-3 | 15:00-15:50</span>　IT業界で働くためのtips</h3>
                        <div class="inner_box clfix  mb3">
                            <div class="speaker_photo"><img src="@/static/conference/2017/speakers/omame19861.jpg" alt="Speaker 1-3"></div>
                            <div class="profile fB pb10 mb10">
                                <p class="pb10"><span class="name">みほ</span> <span class="fB">(<a href="https://twitter.com/omame19861">@omame19861</a>)</span></p>
                                <p class="sub"><span class="highlight">&nbsp;対象技術&nbsp;</span>&nbsp;不問　<span class="highlight">&nbsp;セッション レベル&nbsp;</span>&nbsp;初級</p>
                            </div>
                            <div class="description">
                                <h4>Title : 知識のなかの隙間を埋める</h4>
                                <p>知識と知識の隙間に、認識しづらい「知識の盲点」や課題が潜んでいます。<br> その盲点を認識し、自分のキャリアや技術の向上にどう役立てるかを考えます。
                                </p>
                            </div>
                        </div>
                        <div class="inner_box clfix">
                            <div class="speaker_photo"><img src="@/static/conference/2017/speakers/NahoInuyama.jpg" alt="犬山奈穂"></div>
                            <div class="profile fB pb10 mb10">
                                <p class="pb10"><span class="name">犬山奈穂</span> <span class="fB">(<a href="https://twitter.com/NahoInuyama">@NahoInuyama</a>)</span></p>
                                <p class="sub"><span class="highlight">&nbsp;対象技術&nbsp;</span>&nbsp;不問　<span class="highlight">&nbsp;セッション レベル&nbsp;</span>&nbsp;初級～上級</p>
                            </div>
                            <div class="description">
                                <h4>Title : これからも Geek な女性であるために - Sheryl Sandberg が教えてくれた 3 つの事 - </h4>
                                <p>エンジニアが男女関係なく将来の自分のキャリアを描ける世の中をつくるには、今私たちはこの社会の一員として何をすべきなのでしょうか。Facebook COO で、IT 業界の女性リーダーである Sheryl Sandberg (シェリル・サンドバーグ) のアドバイスを日本の社会や組織にある課題や私たち(= IT 業界で働く女性) の日常と照らし合わせて考えるセッションです。</p>
                            </div>

                        </div>
                    </li>
                    <li id="LT" class="list">
                        <h3 class="fB"><span class="time">Session A-4 | 16:00-16:50</span>　LT大会(登壇順は当日決めるよ!)</h3>
                        <div class="inner_box clfix mb3">
                            <div class="speaker_photo"><img src="@/static/conference/2017/speakers/maaya8585.jpg" alt="まーや"></div>
                            <div class="profile fB pb10 mb10">
                                <p class="pb10"><span class="name">まーや</span> <span class="fB">(<a href="https://twitter.com/maaya8585">@maaya8585</a>)</span></p>
                            </div>
                            <div class="description">
                                <h4>Title : 自作有害コンテンツ検知してみよう</h4>
                                <p>WEB上の有害コンテンツをマスクしてくれるアプリを作ってみたよ。Azure / GCP / Chrome拡張 のおはなしです。</p>
                            </div>
                        </div>
                        <div class="inner_box clfix mb3">
                            <div class="speaker_photo"><img src="@/static/conference/2017/speakers/gocci.png" alt="gocci"></div>
                            <div class="profile fB pb10 mb10">
                                <p class="pb10"><span class="name">gocci</span> <span class="fB">(<a href="http://qiita.com/GOCCI">Qiita: @GOCCI</a>)</span></p>
                            </div>
                            <div class="description">
                                <h4>Title : エンジニアじゃないけどエンジニア向けイベントに紛れ込んでみた</h4>
                                <p>Geek Woman Japanのコアキャストをやってみて学んだことを発表します</p>
                            </div>
                        </div>
                        <div class="inner_box clfix mb3">
                            <div class="speaker_photo"><img src="@/static/conference/2017/speakers/tokutoku393.jpg" alt="ちゃんとく"></div>
                            <div class="profile fB pb10 mb10">
                                <p class="pb10"><span class="name">ちゃんとく</span> <span class="fB">(<a href="https://twitter.com/tokutoku393">@tokutoku393</a>)</span></p>
                            </div>
                            <div class="description">
                                <h4>Title : エンジニア界隈の歩き方 ～未経験から始めるエンジニア生活～</h4>
                                <p>知識ゼロの文系女子がエンジニアになり、転職も経験して見えてきたエンジニア生活を語ります。</p>
                            </div>
                        </div>
                        <div class="inner_box clfix mb3">
                            <div class="speaker_photo"><img src="@/static/conference/2017/speakers/katayose.jpg" alt="片寄里菜"></div>
                            <div class="profile fB pb10 mb10">
                                <p class="pb10"><span class="name">片寄里菜</span>
                                    <span class="fB">(<a href="https://twitter.com/se_lina08">@se_lina08</a>)</span></p>
                            </div>
                            <div class="description">
                                <h4>Title : 画像ファイルを使わずにHTMLとCSSでGeekWomanJapanロゴを描く</h4>
                                <p>あんまり使わない技術なんですが、楽しいのでやってみます！</p>
                            </div>
                        </div>
                        <div class="inner_box clfix">
                            <div class="speaker_photo"><img src="@/static/conference/2017/speakers/AyaTokura.png" alt="戸倉 彩"></div>
                            <div class="profile fB pb10 mb10">
                                <p class="pb10"><span class="name">戸倉 彩</span>　<span class="fB">(<a href="https://twitter.com/ayatokura">@ayatokura</a>)</span><br><span class="fB">日本マイクロソフト株式会社</span></p>
                                <!--<p class="sub"><span class="highlight">&nbsp;対象技術&nbsp;</span>&nbsp;マイクロソフトのテクノロジー全般　<span class="highlight">&nbsp;セッション レベル&nbsp;</span>&nbsp;初級～上級</p>-->
                            </div>
                            <div class="description">
                                <h4>Title : MVPのここが凄い！</h4>
                                <p>意外と知られていない「MVP」と呼ばれている、マイクロソフトのMost Valuable Professionalアワードを受賞された方々の生態と魅力をお届けします。</p>
                            </div>
                        </div>
                    </li>

                    <li id="Session2-1" class="list">
                        <h3 class="fB"><span class="time">Session B-1 | 13:00-13:50</span>　モダンWeb開発におけるVSCode活用TIPS</h3>
                        <div class="inner_box clfix">
                            <div class="speaker_photo"><img src="@/static/conference/2017/speakers/kimura_m_29.jpg" alt="Speaker 2-1"></div>
                            <div class="profile fB pb10 mb10">
                                <p class="pb10"><span class="name">木村茉由</span> <span class="fB">(<a href="https://twitter.com/kimura_m_29">@kimura_m_29</a>)</span></p>
                                <p class="sub"><span class="highlight">&nbsp;対象技術&nbsp;</span>&nbsp;VSCode/モダンWeb開発全般　<span class="highlight">&nbsp;セッション レベル&nbsp;</span>&nbsp;初級～中級</p>
                            </div>
                            <div class="description">
                                <h4>Title : いまどきのモダンWeb開発を行う際に、VSCodeをどのように活用すると効率よく開発できるのかを紹介します。</h4>
                                <p>これからフロントエンドの開発を本格的に始める方や、VSCodeをあまり使っていない方向けに、いまどきのモダンWeb開発を行う際にVSCodeをどのように活用すると効率良く開発できるのかを紹介します。</p>
                            </div>
                        </div>
                    </li>
                    <li id="Session2-2" class="list">
                        <h3 class="fB"><span class="time">Session B-2 | 14:00-14:50</span>　Android / iOS の比較セッション</h3>
                        <div class="inner_box clfix mb3">
                            <div class="profile fB pb10 mb10">
                                <p class="sub"><span class="highlight">&nbsp;対象技術&nbsp;</span>&nbsp;Android / iOS　<span class="highlight">&nbsp;セッション レベル&nbsp;</span>&nbsp;初級～中級</p>
                            </div>
                            <div class="description">
                                何かと比較されがちなAndroidとiOS。今回は各エンジニアがそれぞれの良いところやちょっと苦労するところをショートセッション形式でお話ししていきます。まだAndroidとiOSを触ったことがない人でも大歓迎です！アプリ開発の裏側をお話しします！
                            </div>
                        </div>
                        <div class="inner_box clfix mb3">
                            <div class="speaker_photo"><img src="@/static/conference/2017/speakers/joooi13.jpg" alt="城井優"></div>
                            <div class="profile fB pb10 mb10">
                                <p class="pb10"><span class="name">城井優</span> <span class="fB">(<a href="https://twitter.com/joooi13">@joooi13</a>)</span></p>
                            </div>
                            <div class="description">
                                <span>&nbsp;セッション担当技術&nbsp;</span>&nbsp;Android
                            </div>
                        </div>
                        <div class="inner_box clfix mb3">
                            <div class="speaker_photo"><img src="@/static/conference/2017/speakers/namiki.jpeg" alt="namiki"></div>
                            <div class="profile fB pb10 mb10">
                                <p class="pb10"><span class="name">namiki</span> <span class="fB">(<a href="https://twitter.com/nyanyoni">@nyanyoni</a>)</span></p>
                            </div>
                            <div class="description">
                                <span>&nbsp;セッション担当技術&nbsp;</span>&nbsp;Android
                            </div>
                        </div>
                        <div class="inner_box clfix mb3">
                            <div class="speaker_photo"><img src="@/static/conference/2017/speakers/akatsuki174.jpg" alt="須藤槙"></div>
                            <div class="profile fB pb10 mb10">
                                <p class="pb10"><span class="name">須藤槙</span> <span class="fB">(<a href="https://twitter.com/akatsuki174">@akatsuki174</a>)</span></p>
                            </div>
                            <div class="description">
                                <span>&nbsp;セッション担当技術&nbsp;</span>&nbsp;iOS
                            </div>
                        </div>
                        <div class="inner_box clfix mb3">
                            <div class="speaker_photo"><img src="@/static/conference/2017/speakers/ChiharuNameki.png" alt="なめきちはる"></div>
                            <div class="profile fB pb10 mb10">
                                <p class="pb10"><span class="name">なめきちはる</span> <span class="fB">(<a href="https://github.com/Ridwy">GitHub: Chiharu Nameki</a>)</span></p>
                            </div>
                            <div class="description">
                                <span>&nbsp;セッション担当技術&nbsp;</span>&nbsp;iOS
                            </div>
                        </div>
                    </li>
                    <li id="Session2-3" class="list">
                        <h3 class="fB"><span class="time">Session B-3 | 15:00-15:50</span>　SIerもはじめるわたしたちのDevOps</h3>
                        <div class="inner_box clfix">
                            <div class="speaker_photo"><img src="@/static/conference/2017/speakers/syobochim.jpg" alt="しょぼちむ"></div>
                            <div class="profile fB pb10 mb10">
                                <p class="pb10"><span class="name">しょぼちむ</span> <span class="fB">(<a href="https://twitter.com/syobochim">@syobochim</a>)</span></p>
                                <p class="sub"><span class="highlight">&nbsp;対象技術&nbsp;</span>&nbsp;DevOps　<span class="highlight">&nbsp;セッション レベル&nbsp;</span>&nbsp;中級</p>
                            </div>
                            <div class="description">
                                <h4>Title : SIerもはじめるわたしたちのDevOps</h4>
                                <p>「週末の予定空いてる？」 業務システムに携わる多くのエンジニアにとっては、このセリフがデートのお誘いではない、、ということは周知の事実です。 大規模基幹システムの多くは、業務システムが停止する休日夜間などに、アプリケーションのバージョンアップが行われます。そのため、アプリケーションエンジニア／ネットワークエンジニア／サーバエンジニアは、休日返上で作業にあたります。 が、いくら開発環境／テスト環境でテストを念入りに行っても、リリース手順書をなんどレビューしても、偉い人のハンコをスタンプラリーしても、、、、悲劇は起こります。
                                    継続的インテグレーション／継続的デリバリーができるしくみを作れば、より良い業務システムを安全に素早くお客様に届けられる未来がくるはず！・・・というわけで、SIerである私たちが日々試行錯誤したり調査研究したりしていることをお話をさせていただきます。 セッションでは、開発の最前線で業務に携わるエンジニアの目線から、Gitを使った開発の進め方／CIツールを使ったビルドやデプロイに加えて、課題管理やチーム内コミュニケーションの取り方など、現場で行なわれているDevOpsへの取り組みについて紹介します。
                                </p>
                            </div>
                        </div>
                    </li>
                    <li id="Session2-4" class="list">
                        <h3 class="fB"><span class="time">Session B-4 | 16:00-16:50</span>　使いたくなるクラウド、選べるクラウド！</h3>
                        <div class="inner_box clfix">
                            <div class="speaker_photo"><img src="@/static/conference/2017/speakers/dzeyelid.jpg" alt="大平かづみ"></div>
                            <div class="profile fB pb10 mb10">
                                <p class="pb10"><span class="name">大平かづみ</span> <span class="fB">(<a href="https://twitter.com/dz_">@dz_</a>)</span><br><span class="fB">Cogbotコミュニティ、Node-RED ユーザー会</span></p>
                                <p class="sub"><span class="highlight">&nbsp;対象技術&nbsp;</span>&nbsp;AWS/Azure/Bluemix　<span class="highlight">&nbsp;セッション レベル&nbsp;</span>&nbsp;初級～中級</p>
                            </div>
                            <div class="description">
                                <h4>Title : あなたのニーズに応えてくれるクラウドを見つけよう</h4>
                                <p>どんなクラウドにも得意なところや特色があります。本職プログラマ、趣味IoTの私が好んで使うクラウドの Microsoft Azure, Amazon Web Services, IBM Bluemix について、様々な観点でご紹介します。あなたも用途や好みにあったクラウドに出会えますように！</p>
                            </div>
                        </div>
                    </li>
                    <li id="Session3-1" class="list">
                        <h3 class="fB"><span class="time">13:00-13:50</span>　超入門！Power BI はじめの一歩</h3>
                        <div class="inner_box clfix">
                            <div class="speaker_photo"><img src="@/static/conference/2017/speakers/YukikoGoto2.png" alt="後藤 由記子"></div>
                            <div class="profile fB pb10 mb10">
                                <p class="pb10"><span class="name">後藤 由記子</span>　<span class="fB">(Windows 女子部)</span><br><span class="fB">日本ビジネスシステムズ株式会社</span></p>
                                <p class="sub"><span class="highlight">&nbsp;対象技術&nbsp;</span>&nbsp;Power BI　<span class="highlight">&nbsp;セッション レベル&nbsp;</span>&nbsp;初級</p>
                            </div>
                            <div class="description">
                                <h4>Title : ハンズオンラボ</h4>
                                <p>Power BIってなあに？Power BIって聞いたことあるけれど、何ができるんだろう？という方々に、Power BIの魅力をお伝えします。</p>
                            </div>
                        </div>
                    </li>

                    <li id="Session3-2" class="list">
                        <h3 class="fB"><span class="time">14:00-14:50</span>　超簡単 Visual Studio Code ではじめる Angular 2</h3>
                        <div class="inner_box clfix mb3">
                            <div class="profile fB pb10 mb10">
                                <p class="sub"><span class="highlight">&nbsp;対象技術&nbsp;</span>&nbsp;Visual Studio　<span class="highlight">&nbsp;セッション レベル&nbsp;</span>&nbsp;初級</p>
                            </div>
                            <div class="description">
                                <h4>Title : ハンズオンラボ</h4>
                                <p>Angular2 は 入門者にとっては少し難しいところがありますが Visual Studio Code を使うことで少しの努力で書き進めることができます。今回は短い時間ですが簡単ワイワイ・コーディングをしたいと思います。お楽しみに！</p>
                            </div>
                        </div>
                        <div class="inner_box clfix">
                            <div class="speaker_photo"><img src="@/static/conference/2017/speakers/FumioSagawa.png" alt="佐川 夫美雄"></div>
                            <div class="profile fB pb10 mb10">
                                <p class="pb10"><span class="name">佐川 夫美雄</span><br><span class="fB">Ashiras, inc</span></p>
                            </div>
                        </div>
                        <div class="inner_box clfix">
                            <div class="speaker_photo"><img src="@/static/conference/2017/speakers/SakiHomma.png" alt="さっくる(本間 咲来)"></div>
                            <div class="profile fB pb10 mb10">
                                <p class="pb10"><span class="name">さっくる (本間 咲来)</span>　<span class="fB">(<a href="https://twitter.com/sakkuru">@sakkuru</a>)</span><br>
                                    <span class="fB">日本マイクロソフト株式会社</span></p>
                            </div>
                        </div>
                    </li>
                    <li id="Session3-3" class="list">
                        <h3 class="fB"><span class="time">15:00-15:50</span>　Xamarin ハンズオン<br>(Xamarin を実際に触ってみてアプリを作ってみよう！)</h3>
                        <div class="inner_box clfix">
                            <div class="speaker_photo"><img src="@/static/conference/2017/speakers/madoka_chiyoda.jpg" alt="千代田 まどか"></div>
                            <div class="profile fB pb10 mb10">
                                <p class="pb10"><span class="name">千代田 まどか</span>　<span class="fB">(<a href="https://twitter.com/chomado">@chomado</a>)</span><br><span class="fB">日本マイクロソフト株式会社</span></p>
                                <p class="sub"><span class="highlight">&nbsp;対象技術&nbsp;</span>&nbsp;Xamarin　<span class="highlight">&nbsp;セッション レベル&nbsp;</span>&nbsp;初級</p>
                            </div>
                            <div class="description">
                                <h4>Title : ハンズオンラボ</h4>
                                <!--<p>セッション概要（詳細）</p>-->
                            </div>
                        </div>
                    </li>
                    <li id="Session3-4" class="list">
                        <h3 class="fB"><span class="time">16:00-16:50</span>　Dockerで 今日からはじめる Container体験</h3>
                        <div class="inner_box clfix">
                            <div class="speaker_photo"><img src="@/static/conference/2017/speakers/RyuichiTokugami.png" alt="得上 竜一"></div>
                            <div class="profile fB pb10 mb10">
                                <p class="pb10"><span class="name">得上 竜一</span><br><span class="fB">Microsoft MVP</span></p>
                                <p class="sub"><span class="highlight">&nbsp;対象技術&nbsp;</span>&nbsp;Docker　<span class="highlight">&nbsp;セッション レベル&nbsp;</span>&nbsp;初級</p>
                            </div>
                            <div class="description">
                                <h4>Title : ハンズオンラボ</h4>
                                <p>Dockerを触ったことがない人に向けて、今日はじめて触ってみるところを体験してもらいます。きっとこの便利な環境にハマるはずです。<br> これから自分の技術をもっともっと簡単に運用出来るように、その第一歩を踏み出しませう。
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
            <!-- speaker //-->
        </div>
    </section>
    <!-- time table //-->
    <!--// nursery -->
    <section id="nursery">
        <div class="contents">
            <div class="description pb20 mb20 clfix">
                <div class="txt">
                    <h2 class="fB">託児サービスについて</h2>
                    <p>イベントの当日は参加者へ向けて託児サービスをご利用いただけます。 <br> 事前予約の先着順ですのでご利用を検討している方はお早めにお申込みください。 <br> 対象は生後3ヵ月から就園児のお子様まで。
                        <br> ※小学生（低学年）は応ご相談
                    </p>
                    <p>授乳ルームやおむつ替えのお部屋も別途ご用意いたします。</p>
                </div>
                <div class="photo"><img src="img/nursery.png"></div>
            </div>
            <div class="sub_btn_area pb35">
                <p><a href="https://www.instant.ly/s/rucSz" target="_blank" class="sub_btn">ご予約はこちら</a></p>
            </div>

            <h3>持ち物</h3>
            <ol class="mb20">
                <li>保護者の身分証明書(健康保険証・運転免許証など)</li>
                <li>Geek Women Japan x Microsoft イベント参加登録時の予約番号</li>
                <li>以下のものを必要に応じてお持ちください。<br> おやつ、粉ミルク、哺乳瓶（お湯のご用意はあります）、飲み物（ミネラルウォーターはお出しできます）、 おむつ、おしり拭き、着替え、手拭用タオル、ビニール袋数枚（汚れた服入れ用）など。</li>
            </ol>
            <h3>保護者様へお願い</h3>
            <ol class="mb20">
                <li>緊急の場合は、携帯電話でお呼び出しいたします。ご予約の際に緊急連絡先を必ずご記入ください。</li>
                <li>保育スタッフは、薬の投与はいたしかねます。</li>
                <li>保育中、万が一の当社の責による事故の場合、託児を請け負う(株)アルファコーポレーション加入の損害賠償責任保険で対応いたします。</li>
                <li>お持ち物には必ず名前をご記入ください。ご記名のないものにつきましては責任を負いかねます。</li>
                <li>発熱など体調不良や、感染症等で他のお子さまに影響の恐れがあるとスタッフが判断した場合は、お預かりをお断りする場合があります。</li>
                <li>送り・迎えともに時間厳守にてお願いいたします。</li>
                <li>授乳ルームやおむつ替えのお部屋も別途ご用意がありますが、保護者様の責任においてご利用ください。</li>
            </ol>
            <p class="contact mb35">(株)アルファコーポレーション 担当:中城(なかじょう)・ 小椙(こすぎ)<br>TEL 0120-086-720 (月~金 9:30~17:30)</p>
        </div>
    </section>
    <!-- nursery //-->
	<footer>
			<p class="copy">
				<nuxt-link to="/">&copy; Geek Women Japan</nuxt-link>
			</p>
	</footer>
</div>
</template>
<script>
export default {
  layout: 'conference',
  head(){
    return {
      title: 'Geek Women Japan x Microsoft - Geek になりたい人のためのミニカンファ',
      meta: [
      { hid: 'description', name:'description', content: 'Geek Women Japan x Microsoft は、技術に縛られない女性エンジニアの輪を形成するためにエンジニア女子が中心となってギークなセッションを繰り広げるカンファレンスです。2017 年 3 月 4 日 (土) 日本マイクロソフト品川本社で開催!'},
      { hid: 'keywords', name:'keywords', content: 'Geek Women Japan x Microsoft, Microsoft, Geek Women Japan'},
      { hid: 'format-detection', name:'format-detection', content: 'telephone=no,address=no,email=no'},
      { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0' },
      { hid: 'og:title', name: 'og:title', content: 'Geek Women Japan x Microsoft' },
      { hid: 'og:description', name: 'description', content: 'Geek Women Japan x Microsoft は女性エンジニアのためのカンファレンスです。2017 年 3 月 4 日 (土) 日本マイクロソフト品川本社で開催!' } ,   
      { hid: 'og:image', name: 'og:image', content: '@/static/conference/2017/opg_ms_GWJ.png' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:url', name: 'og:url', content: 'http://geekwomenjapan.github.io/conference2017/' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Geek Women Japan' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@geekwomenjapan' }
      ],
      link: [
      { rel: 'icon', href: '/icon/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/icon/favicon.ico' }
      ]
    }
  },
	data(){
		return{
			staticImage: "/conference/2017/hero_bg.jpg",
			style: {
					'background-color': '#ffffff',
					'line-height' : '1.8em',
					'font-size' : '1.2em',
					'color' : '#3e3e3e',
					'-webkit-text-size-adjust' : 'none',
					'font-family':'Meiryo,Segoe UI,Arial,Verdana,Tahoma,sans-serif'
			}
		}
	}
}
</script>
<style scoped>
@charset "utf-8";
/* reset styles */
* {box-sizing: border-box;}
*::before {box-sizing: border-box;}
*::after {box-sizing: border-box;}
html,body,h1,h2,h3,h4,h5,h6,p,ul,ol,li,dl,dt,dd,img,object,table,caption,tbody,tfoot,thead,tr,th,td,address,iframe,code,pre,strong,em,
fieldset,form,input,select,optgroup,option,textarea,button,legend,label{margin:0;padding:0;border:0;background:none;outline:0;font-size:100%; font-weight:normal;font-style:normal;}
body{
	line-height:1.8em;
	font-size:1.2em;
	color:#3e3e3e;
	-webkit-text-size-adjust:none;
	font-family:Meiryo,Segoe UI,Arial,Verdana,Tahoma,sans-serif;
	}
ul,ol{list-style:none;}
img{vertical-align:bottom;}
a,object{outline:0;color:#3e3e3e;}
a:hover {text-decoration:none;}
table{border-collapse:collapse;border-spacing:0;}
input,select,button{vertical-align:middle;}
th,td{text-align:left;}

/* common styles - margin */

.ml0 {margin-left:   0!important;}
.ml3 {margin-left: 3px!important;}
.ml5 {margin-left: 5px!important;}
.ml10{margin-left:10px!important;}
.ml15{margin-left:15px!important;}
.ml20{margin-left:20px!important;}
.ml25{margin-left:25px!important;}
.ml30{margin-left:30px!important;}
.ml35{margin-left:35px!important;}
.ml40{margin-left:40px!important;}
.ml50{margin-left:50px!important;}
.ml60{margin-left:60px!important;}
.ml70{margin-left:70px!important;}

.mt0 {margin-top:   0!important;}
.mt3 {margin-top: 3px!important;}
.mt5 {margin-top: 5px!important;}
.mt7 {margin-top: 7px!important;}
.mt10{margin-top:10px!important;}
.mt15{margin-top:15px!important;}
.mt20{margin-top:20px!important;}
.mt25{margin-top:25px!important;}
.mt28{margin-top:28px!important;}
.mt30{margin-top:30px!important;}
.mt35{margin-top:35px!important;}
.mt40{margin-top:40px!important;}
.mt50{margin-top:50px!important;}
.mt60{margin-top:60px!important;}
.mt70{margin-top:70px!important;}

.mr0 {margin-right:   0!important;}
.mr3 {margin-right: 3px!important;}
.mr5 {margin-right: 5px!important;}
.mr10{margin-right:10px!important;}
.mr15{margin-right:15px!important;}
.mr20{margin-right:20px!important;}
.mr25{margin-right:25px!important;}
.mr30{margin-right:30px!important;}
.mr35{margin-right:35px!important;}
.mr40{margin-right:40px!important;}
.mr50{margin-right:50px!important;}
.mr60{margin-right:60px!important;}
.mr70{margin-right:70px!important;}

.mb0 {margin-bottom:   0!important;}
.mb3 {margin-bottom: 3px!important;}
.mb5 {margin-bottom: 5px!important;}
.mb10{margin-bottom:10px!important;}
.mb15{margin-bottom:15px!important;}
.mb20{margin-bottom:20px!important;}
.mb25{margin-bottom:25px!important;}
.mb30{margin-bottom:30px!important;}
.mb35{margin-bottom:35px!important;}
.mb40{margin-bottom:40px!important;}
.mb50{margin-bottom:50px!important;}
.mb60{margin-bottom:60px!important;}
.mb70{margin-bottom:70px!important;}

/* common styles - padding */

.pl0 {padding-left:   0!important;}
.pl3 {padding-left: 3px!important;}
.pl5 {padding-left: 5px!important;}
.pl10{padding-left:10px!important;}
.pl15{padding-left:15px!important;}
.pl20{padding-left:20px!important;}
.pl25{padding-left:25px!important;}
.pl30{padding-left:30px!important;}
.pl35{padding-left:35px!important;}
.pl40{padding-left:40px!important;}
.pl50{padding-left:50px!important;}
.pl60{padding-left:60px!important;}

.pt0 {padding-top:   0!important;}
.pt3 {padding-top: 3px!important;}
.pt5 {padding-top: 5px!important;}
.pt7 {padding-top: 7px!important;}
.pt10{padding-top:10px!important;}
.pt15{padding-top:15px!important;}
.pt20{padding-top:20px!important;}
.pt25{padding-top:25px!important;}
.pt30{padding-top:30px!important;}
.pt35{padding-top:35px!important;}
.pt40{padding-top:40px!important;}
.pt50{padding-top:50px!important;}
.pt60{padding-top:60px!important;}
.pt100{padding-top:100px!important;}

.pr0 {padding-right:   0!important;}
.pr3 {padding-right: 3px!important;}
.pr5 {padding-right: 5px!important;}
.pr10{padding-right:10px!important;}
.pr15{padding-right:15px!important;}
.pr20{padding-right:20px!important;}
.pr25{padding-right:25px!important;}
.pr30{padding-right:30px!important;}
.pr35{padding-right:35px!important;}
.pr40{padding-right:40px!important;}
.pr50{padding-right:50px!important;}
.pr60{padding-right:60px!important;}

.pb0 {padding-bottom:   0!important;}
.pb3 {padding-bottom: 3px!important;}
.pb5 {padding-bottom: 5px!important;}
.pb10{padding-bottom:10px!important;}
.pb15{padding-bottom:15px!important;}
.pb20{padding-bottom:20px!important;}
.pb25{padding-bottom:25px!important;}
.pb30{padding-bottom:30px!important;}
.pb35{padding-bottom:35px!important;}
.pb40{padding-bottom:40px!important;}
.pb50{padding-bottom:50px!important;}
.pb60{padding-bottom:60px!important;}
.pb70{padding-bottom:70px!important;}
.pb80{padding-bottom:80px!important;}

/* common styles - float */
.fL{float:left!important;}
.fR{float:right!important;}

/* common styles - text-align */
.tL{text-align:left!important;}
.tC{text-align:center!important;}
.tR{text-align:right!important;}

/* common styles - font-size */
.fs10{font-size:80%!important;}
.fs200{font-size:200%!important;}

/* common styles - clear float */
.clfix:after{content:'';display:block;clear:both;}
.clfix{zoom:1;}
.clear{clear:both;}

/* common styles - fontweight */
.fB{font-weight:bold;}
.fN{font-weight:normal;}

/* common styles - vertical-align */
.vT{vertical-align:top!important;}
.vM{vertical-align:middle!important;}

/* contents */
.contents {
	width:980px; padding:0; margin:0 auto;
}

/* h2 */
h2 { font-size:2.0rem; line-height:3.5rem;}
h3 {font-size:1.3rem;}

/* br */
.br_p:before {content: "\A" ; white-space: pre;}

/* nav */
#nav {left: 0; top: 0; width: 100%; text-align: center; position: fixed; z-index: 10000; cursor: default; background:#5dbda4;}
#nav ul {margin:0;}
#nav li {margin: 5px 1% 3px 1%; display: inline-block; font-weight:bold; font-size:1.0rem; line-height:1.6rem;}
#nav .last {border-left:2px solid #fff; margin-left:40px; padding-left:15px;}
#nav a {outline: 0; color: #fff; text-decoration: none; display: block; position: relative;}
#nav a:hover {filter:alpha(opacity=90); -moz-opacity: 0.9; opacity: 0.9;}
#nav a.active::before {left: 50%; bottom: -0.6em; margin-left: -0.75em; border-top-color: rgb(40, 40, 40); border-right-color: transparent; border-left-color: transparent; border-top-width: 0.6em; border-right-width: 0.75em; border-left-width: 0.75em; border-top-style: solid; border-right-style: solid; border-left-style: solid; display: block; position: absolute; content: "";}

/* header */
#header {
  background-size:cover;
  background-repeat:no-repeat;
  text-align:center;
  background-position:center;}
#header h2 {font-size:1.8rem;}
#header p {font-size:1.3rem; margin:0 0 30px 0;}

/* button */
.CS {
	width:430px;
	background-color:#f33c35;
	-moz-border-radius:70px;
	-webkit-border-radius:70px;
	border-radius:70px;
	border:1px solid #b05956;
	display:inline-block;
	color:#ffffff;
	font-family:Arial;
	font-size:2.0rem !important;
	font-weight:bold;
	padding:5px 0 10px 0;
	text-decoration:none;
	text-shadow:0px 1px 0px #000000;
}
.CS span {
	font-size:1.4rem;
}
.button {
	width:430px;
	height:70px;
	background-color:#ea0700;
	-moz-border-radius:70px;
	-webkit-border-radius:70px;
	border-radius:70px;
	border:1px solid #b05956;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:2.0rem;
	font-weight:bold;
	padding:16px 0 0 0;
	text-decoration:none;
	text-shadow:0px 1px 0px #000000;
}
.button:hover {background-color:#f33c35;}
.button:active {position:relative; top:1px;}

/* about*/
#about .ttl, #about .sub {text-align:center;}
#about_link { display:block; position:relative; top:-90px;}
#about table { width:100%; border-collapse: separate; border-spacing:0 15px;}
#about th { width:20%; padding:5px 0; text-align:center; background:#9be1cf; font-weight:bold;}
#about td {padding:5px 15px; background:#e4e4e4; font-weight:bold;}
#about .SNS {font-size: 0; text-align:center;}
#about .SNS li {font-size: 0; display: inline-block; width: 80px;}
#about .SNS li a {background: #5dbda4; border-radius: 50%; -moz-border-radius: 50%; -webkit-border-radius: 50%; width:60px; height:60px; display:block;}
#about .SNS li a:hover { background:#479f88;}
#about .photo {font-size: 0; text-align:center;} 
#about .photo li {font-size: 0; display: inline-block; width:16.6%;}
#about .photo img {width: 100%; margin:0; padding:0;}

/* mvp */
#mvp {
	width:940px;
	border: 2px solid #0078d7;
	padding: 18px;
	margin:0 auto;
}
#mvp h2 {
	color: #0078d7;
	text-align: center;
	font-size: 1.6rem;
	line-height: 2.4rem;
}
#mvp .description {
	padding: 0 0 20px 0;
}
#mvp .description img {
	float: right;
	padding: 0 50px 15px 50px;
}
#mvp .description p {
	font-size: 0.9rem;
	line-height: 1.6rem;
	padding-bottom: 10px;
}
#mvp .contact {
	border-top:1px solid #0078d7;
	padding: 20px 0 0 0 ;
}
#mvp .contact h3 {
	float: left;
	width: 145px;
	font-size: 1.0rem;
	text-align: center;
	background: #e4e4e4;
	padding: 25px 0;
	margin: 0;
}
#mvp .contact ul {
	float: left;
	width: 725px;
	padding: 0 0 0 50px;
	margin: 0;
	font-size: 0.9rem;
	line-height: 1.6rem;
}
#mvp .contact li {
	list-style: circle;
	padding: 0 0 5px 0;
}

/* timetable */
#timetable { background:#ebebeb;}
table.timetable-table {margin: 0 auto; border-collapse: collapse; border-spacing: 0; background: #fff; border-top:1px solid #646464; border-left:1px solid #646464; font-size:1.0rem;}
table.timetable-table th {padding: 0.3rem 0.8rem; width: 5%; text-align: center; vertical-align: middle; background: #9be1cf; border-right:1px solid #646464; border-bottom:1px solid #646464;}
table.timetable-table th span { font-size:0.8rem;}
table.timetable-table td {padding: 0.8rem; width: 10%; text-align: left; vertical-align: top; border-right:1px solid #646464; border-bottom:1px solid #646464;}
table.timetable-table .sub { text-align: center;}
table.timetable-table .session-title {font-weight: bold; padding:0; line-height:1.6rem; padding-bottom:0.5rem;}
table.timetable-table .session-speaker {font-size:0.9em; padding:0; line-height:1.2rem;}

/* speaker */
#speaker ul .list {padding-top:40px;}
#speaker h3 { width:100%; color:#fff; background:#ff8f8f; font-size:1.6rem; line-height:2.0rem; padding:10px 25px 6px 25px;}
#speaker h3 .time {font-size: 1.0rem; vertical-align: middle;}
#speaker .inner_box { background:#fff; padding:20px 25px;}
#speaker .speaker_photo {float:left; width:175px; height:175px; margin:0 20px 0 0;}
#speaker .speaker_photo img {width:175px; height:175px; border-radius: 175px; -webkit-border-radius: 175px; -moz-border-radius: 175px;}
#speaker .profile {border-bottom:1px dotted #808080;}
#speaker .profile .name {font-weight:bold; line-height:1.8rem; font-size:1.4rem;}
#speaker .profile .sub {font-size:0.8rem;}
#speaker .profile .highlight { border:1px solid #B0B0B0;}
#speaker p {font-size:1.0rem; margin:0; padding:0; line-height:1.6rem;}
#speaker .description { font-size:1.0rem; line-height:1.7rem;}
#speaker h4 {font-weight:bold; margin:0 0 0.3rem 0;}

/* nursery */
#nursery {
	padding:40px 0 0 0;
}
#nursery .description {
	border-bottom: 1px solid #9be1cf;
}
#nursery .description .txt {
	float: left;
	width: 700px;
}
#nursery .description .txt h2 {
	font-size: 1.8rem;
	padding: 0 0 20px 0;
}
#nursery .description .txt p {
	font-size: 1.0rem;
	padding-bottom: 10px;
}
#nursery .description .photo {float:right; width:260px; height:260px; margin:0;}
#nursery .description .photo img {width:260px; height:260px; border-radius: 260px; -webkit-border-radius: 260px; -moz-border-radius: 260px;}

#nursery .sub_btn_area {width: 360px; margin: 0 auto; text-align: center;}
#nursery .sub_btn {
	width:360px;
	background-color:#ea0700;
	-moz-border-radius:70px;
	-webkit-border-radius:70px;
	border-radius:70px;
	border:1px solid #b05956;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-weight:bold;
	padding:14px 0 12px 0;
	text-decoration:none;
	text-shadow:0px 1px 0px #000000;
	text-align: center;
	font-size: 1.6rem;
}
#nursery .sub_btn:hover {background-color:#f33c35;}
#nursery .sub_btn:active {position:relative; top:1px;}
#nursery .sub_btn a {color: #fff; text-decoration: none;}

#nursery .txt_cs {text-align: center; font-size: 1.0rem;}
#nursery h3 {font-size: 1.0rem; line-height: 1.0rem; padding: 4px 10px; background: #9be1cf; font-weight: bold; margin: 0 0 10px 0;}
#nursery li {font-size: 0.9rem; line-height: 1.6rem; list-style: decimal; padding: 0 0 5px 0; margin: 0 0 0 25px;}
#nursery .contact {font-size: 0.9rem; line-height: 1.6rem; padding:10px 0 0 0; margin: 0; border-top: 1px solid #9be1cf;}

/* nursery_innner_btn */
.nursery_innner_btn {width: 420px; margin: 0 auto; text-align: center;}
.nursery_innner_btn a {
	width:420px;
	background-color:#9be1cf;
	-moz-border-radius:70px;
	-webkit-border-radius:70px;
	border-radius:70px;
	border:1px solid #67c7ae;
	display:inline-block;
	font-weight:bold;
	padding:10px 0 10px 0;
	text-decoration:none;
	font-size: 1.2rem !important;
}

/* footer */
.copy {text-align:center; padding:10px 0; background:#5dbda4; font-size:0.8em;}
.copy a { color:#fff;}


/*--- max-width:1024px ---------------------------------------------------------*/
@media all and (max-width:1024px)
{
/* contents */
.contents {width:100%; padding:0 2%; margin:0;}
}


/*--- max-width:768px ---------------------------------------------------------*/
@media all and (max-width:768px)
{
body {font-size:1.0em;}
/* h2 */
h2 { font-size:1.2rem; line-height:1.8rem;}

/* br */
.br_p:before {content: "" ; white-space:normal;}
.br_m:before {content: "\A" ; white-space: pre;}

/* nav */
#nav li {font-size:0.8rem; line-height:1.6rem;}
#nav .last {margin-left:10px; padding-left:10px;}

/* header */
#header h1 img { width:100%;}
#header h2 {font-size:1.3rem;}
#header h3 {font-size:1.0rem;}
#header p {font-size:1.0rem; margin:0 0 15px 0;}
/* button */
.CS {
	width:80%;
	background-color:#f33c35;
	-moz-border-radius:70px;
	-webkit-border-radius:70px;
	border-radius:70px;
	border:1px solid #b05956;
	display:inline-block;
	color:#ffffff;
	font-family:Arial;
	font-size:1.5rem !important;
	font-weight:bold;
	padding:1% 0 2.5% 0;
	text-decoration:none;
	text-shadow:0px 1px 0px #000000;
	line-height:1.6rem;
}
.CS span {
	font-size:1.0rem;
}
.button {
	width:80%;
	height:auto;
	background-color:#ea0700;
	-moz-border-radius:70px;
	-webkit-border-radius:70px;
	border-radius:70px;
	border:1px solid #b05956;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:1.5rem;
	font-weight:bold;
	padding:4% 0;
	text-decoration:none;
	text-shadow:0px 1px 0px #000000;
}

/* about */
#about .ttl, #about .sub {text-align:left;}
#about .photo li {font-size: 0; display: inline-block; width:33.3%;}
	
/* mvp */
#mvp {
	width:100%;
	border-top: 2px solid #0078d7;
	border-bottom: 2px solid #0078d7;
	border-left:none; 
	border-right:none; 
	padding: 3% 2%;
}
#mvp h2 {
	text-align: left;
	font-size: 1.1rem;
	line-height: 1.8rem;
}
#mvp .description img {
	float: center;
	padding: 0 5% 2% 5%;
}
#mvp .description p {
	font-size: 0.9rem;
	line-height: 1.6rem;
}
#mvp .contact {
	border-top:none;
	padding: 0 ;
}
#mvp .contact h3 {
	float: none;
	width: 100%;
	padding: 0;
	margin: 0 0 10px 0;
}
#mvp .contact ul {
	float: none;
	width: 100%;
	padding: 0 0 0 20px;
}
#mvp .contact li {
	list-style: circle;
	padding: 0 0 5px 0;
}

/* timetable */
table.timetable-table {display: block; list-style:none;  border:none;}
table.timetable-table thead {display: none;}
table.timetable-table tbody {width: 100%; display: block;}
table.timetable-table tbody tr {width: 100%; margin-bottom: 1.5rem; display: block;}
table.timetable-table tbody th {display: list-item; padding: 0.2rem; width: 100%; border:none;}
table.timetable-table tbody td {display: list-item; padding: 0.4rem; width: 100%;  border:none;}
table.timetable-table .sub { text-align: left;}
table.timetable-table tbody td:nth-of-type(1).row::before {content: "[Room A] (セッション)";}
table.timetable-table tbody td:nth-of-type(2).row::before {content: "[Room B]  (セッション)";}
table.timetable-table tbody td:nth-of-type(3).row::before {content: "[Room C+D] (ハンズオン)";}
/* map */
.map img { width:90%;}
/* speaker */
#speaker .speaker_photo { float:none; width:175px; height:175px; margin:0 auto 10px auto;}
#speaker .profile p {text-align:center;}
#speaker .profile .sub {text-align:left;}

/* nursery */
#nursery .description .txt {float: none;width: 100%;}
#nursery .description .txt h2 {font-size: 1.2rem;}
#nursery .description .txt p {font-size: 0.9rem;}
#nursery .description .photo {float:none; margin:0 auto;}
#nursery .sub_btn_area {width: 90%;}
#nursery .sub_btn {width:90%;}

/* nursery_innner_btn */
.nursery_innner_btn {width: 95%;}
.nursery_innner_btn a {width:95%; font-size: 1.0rem !important;}
	
}
</style>
