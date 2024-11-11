const deleteThis = function(e){
    // Do not change
    document.getElementById('cat').addEventListener('click', () => {
      alert('meow!');
    });
    }
    
    // When clicked, "More info" link should alert "Here's some info"
    // instead of going to a new webpage
    const clickedMoreInfo = function(e){
      alert("Here's some info")
    };
    
    moreInfo = document.getElementById('more-info');
    moreInfo.href = "";
    moreInfo.addEventListener('click', clickedMoreInfo);
    
    
    // When the bark button is clicked, should alert "Bow wow!"
    // Should *not* alert "meow"
    document.getElementById('cat').removeEventListener('click', deleteThis);
    
    document.getElementById('dog').addEventListener('click', () => {
      alert('Bow wow!');
    });