document.addEventListener('DOMContentLoaded', () => {
    // Find all code blocks
    const codeBlocks = document.querySelectorAll('pre > code');
  
    codeBlocks.forEach(codeBlock => {
      // Create a container to position the button
      const container = codeBlock.parentElement;
      container.classList.add('relative'); // Tailwind utility class to position elements
  
      // Create the copy button
      const copyButton = document.createElement('button');
      copyButton.className = 'copy-btn absolute top-2 right-2 px-2 py-1 bg-secondaryBg text-primaryText text-sm rounded hover:bg-divider transition';
      copyButton.textContent = 'Copy';
  
      // Attach click event to copy the code
      copyButton.addEventListener('click', () => {
        const codeText = codeBlock.textContent;
  
        navigator.clipboard.writeText(codeText).then(() => {
          copyButton.textContent = 'Copied!';
          setTimeout(() => (copyButton.textContent = 'Copy'), 2000);
        }).catch(err => {
          console.error('Failed to copy: ', err);
        });
      });
  
      // Append the button to the container
      container.appendChild(copyButton);
    });
  });
  