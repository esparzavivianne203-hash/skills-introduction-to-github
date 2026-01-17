// Main site functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('GitHub Skills Unit Testing Site loaded');
    
    // Add animation to unit cards
    const unitCards = document.querySelectorAll('.unit-card');
    unitCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s, transform 0.5s';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        }, index * 100);
    });
});

// Quiz functionality for unit pages
function checkAnswer(questionId, correctAnswer) {
    const selectedOption = document.querySelector(`input[name="${questionId}"]:checked`);
    const resultDiv = document.getElementById(`result-${questionId}`);
    
    if (!selectedOption) {
        resultDiv.className = 'result error';
        resultDiv.style.display = 'block';
        resultDiv.textContent = '⚠️ Please select an answer';
        return;
    }
    
    if (selectedOption.value === correctAnswer) {
        resultDiv.className = 'result success';
        resultDiv.style.display = 'block';
        resultDiv.textContent = '✅ Correct! Great job!';
    } else {
        resultDiv.className = 'result error';
        resultDiv.style.display = 'block';
        resultDiv.textContent = '❌ Not quite. Try again!';
    }
}

function submitQuiz(unitNumber, answers) {
    let score = 0;
    let total = answers.length;
    
    answers.forEach((answer, index) => {
        const questionId = `q${index + 1}`;
        const selectedOption = document.querySelector(`input[name="${questionId}"]:checked`);
        
        if (selectedOption && selectedOption.value === answer) {
            score++;
        }
    });
    
    const resultDiv = document.getElementById('quiz-result');
    const percentage = (score / total) * 100;
    
    resultDiv.style.display = 'block';
    
    if (percentage === 100) {
        resultDiv.className = 'result success';
        resultDiv.innerHTML = `🎉 Perfect score! ${score}/${total} correct. You've mastered Unit ${unitNumber}!`;
    } else if (percentage >= 70) {
        resultDiv.className = 'result success';
        resultDiv.innerHTML = `👍 Good job! ${score}/${total} correct. Keep learning!`;
    } else {
        resultDiv.className = 'result error';
        resultDiv.innerHTML = `📚 ${score}/${total} correct. Review the material and try again.`;
    }
    
    // Scroll to result
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
