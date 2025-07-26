
document.getElementById('resumeForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const jobRole = document.getElementById('jobRole').value;
    const industry = document.getElementById('industry').value;
    const feedback = document.getElementById('feedback');

    feedback.style.display = 'block';
    feedback.textContent = 'Generating your personalized resume templates...';

    try {
        const response = await fetch('/functions/api/handler.ts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ jobRole, industry })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        feedback.textContent = 'Templates generated successfully! Check your email or download them now.';
    } catch (error) {
        feedback.textContent = 'Error generating resume templates. Please try again later.';
    }
});
