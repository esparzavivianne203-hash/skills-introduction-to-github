// Main site functionality
// Animation constants
const CARD_ANIMATION_OFFSET = '20px';
const CARD_ANIMATION_DURATION = '0.5s';
const CARD_ANIMATION_DELAY = 100; // milliseconds
const CARD_STAGGER_DELAY = 100; // milliseconds between each card

document.addEventListener('DOMContentLoaded', function() {
    console.log('GitHub Skills Unit Testing Site loaded');
    
    // Add animation to unit cards
    const unitCards = document.querySelectorAll('.unit-card');
    unitCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = `translateY(${CARD_ANIMATION_OFFSET})`;
            card.style.transition = `opacity ${CARD_ANIMATION_DURATION}, transform ${CARD_ANIMATION_DURATION}`;
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, CARD_ANIMATION_DELAY);
        }, index * CARD_STAGGER_DELAY);
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
