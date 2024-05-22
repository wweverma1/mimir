setTimeout(() => {
  const assistantResponses = document.querySelectorAll('div[data-message-author-role="assistant"]');  //parsing the latest response
  if (assistantResponses.length > 0) {
      const lastResponse = assistantResponses[assistantResponses.length - 1];
      lastResponse.style.backgroundColor = 'yellow';
  }
}, 5000); //5 second delay to allow page load