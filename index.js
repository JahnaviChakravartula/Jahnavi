document.addEventListener("DOMContentLoaded", function () {
    const maxChars = 100;
    const descriptionElement = document.querySelector('.tour-description');
  
    if (descriptionElement) {
      let currentText = descriptionElement.textContent;
  
      if (currentText.length > maxChars) {
        const truncatedText = currentText.substring(0, maxChars);
        const remainingText = currentText.substring(maxChars);
        
        // Display the truncated text initially
        descriptionElement.innerHTML = truncatedText + ' <span class="more-content">' + remainingText + '</span>' +
          ' <a href="#" class="show-more">Show more</a>';
        
        const showMoreLink = document.querySelector('.show-more');
        const moreContent = document.querySelector('.more-content');
        
        showMoreLink.addEventListener('click', function (event) {
          event.preventDefault();
          
          if (showMoreLink.textContent === 'Show more') {
            // Show more content
            showMoreLink.textContent = 'Show less';
            moreContent.style.display = 'inline';
          } else {
            // Show less content
            showMoreLink.textContent = 'Show more';
            moreContent.style.display = 'none';
          }
        });
      }
    }
  });
  