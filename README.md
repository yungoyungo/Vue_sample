# Vue.jsを使った動的ページの作成演習

Ruby on Rails + Vue.jsを使ってクライアント側で動的に変化するページを作成します。

## 参考

[Rails 5.1 + Vue.js で開発を行う - Qiita](https://qiita.com/cohki0305/items/582c0f5ed0750e60c951)  

[基本的な使い方（Vue.js公式）](https://jp.vuejs.org/v2/guide/)  

[【Vue】Hello Worldから簡単なTodoアプリまでVueでいろいろ書いてみる – Snaplog](https://blog.mismithportfolio.com/web/vuesample)  



## 環境

Ruby 2.4.1  
Ruby on Ralis 5.1.4  
Vue.js  

## 現状動くモノ(というか学習メモ)

js上でVueインスタンスを生成し、rails上でSPAのようなものを描画します

* v-modelによるユーザー入力とアプリケーションの双方向バインディング  

* v-onディレクティブを使ってボタンにイベントリスナを加え、Vueインスタンスのメソッドを呼び出す

    * Reverseボタンが押されるとメッセージを逆にするメソッド

    * Clearボタンが押されるとメッセージを消すメソッド

    * Randomボタンが押されるとランダムなひらがな3文字を生成するメソッド
