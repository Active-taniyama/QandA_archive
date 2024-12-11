<script>
document.addEventListener("DOMContentLoaded", function() {
    // 全ての質問要素を取得
    const questions = document.querySelectorAll('.question');

    // 質問をクリックしたときの動作を設定
    questions.forEach(question => {
        question.addEventListener('click', function() {
            // 対応する回答を取得
            const answer = this.nextElementSibling;
            // 表示・非表示を切り替え
            answer.classList.toggle('hidden');
        });
    });
});
</script>
