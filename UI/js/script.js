const showAnnouncement = () => {
  //div is for the fullScreen background
  let fullScreen = document.createElement('div');
  fullScreen.setAttribute('class', 'fullScreen');
  fullScreen.setAttribute('onclick', `clearAll()`);
    //div has one child[viewAnnouncement]
    let viewAnnouncement = document.createElement('div');
    viewAnnouncement.setAttribute('class', 'viewAnnouncement');
      //viewAnnouncement should have 3 vertical layered blocks.[title, description, announcementFooter(buttons)]
      let title = document.createElement('div');
          title.setAttribute('id', 'title');
      let description = document.createElement('div');
          description.setAttribute('id', 'description');
      let announcementFooter = document.createElement('div');
          announcementFooter.setAttribute('id', 'announcementFooter');
          let update = document.createElement('button');
              update.setAttribute('class', 'update');
              update.innerHTML = 'UPDATE';
          let deleteButton = document.createElement('button');
              deleteButton.setAttribute('class', 'deleteButton');
              deleteButton.innerHTML = 'DELETE';
          let changeStatus = document.createElement('select');
              let accepted = document.createElement('option');
                  accepted.innerHTML = 'accepted';
              let declined = document.createElement('option');
                  declined.innerHTML = 'declined';
              let active = document.createElement('option');
                  active.innerHTML = 'active';
              let deactive = document.createElement('option');
                  deactive.innerHTML = 'deactive';
              changeStatus.appendChild(accepted);
              changeStatus.appendChild(declined);
              changeStatus.appendChild(active);
              changeStatus.appendChild(deactive);
          
          
          announcementFooter.innerHTML = 'CHANGE STATUS';
          announcementFooter.appendChild(changeStatus);
          announcementFooter.appendChild(update);
          announcementFooter.appendChild(deleteButton);
        
        let descriptionText = document.createTextNode('Here will go the description of the Announcement');

      title.innerHTML = `Title :<span>${'THE TITLE WILL GO HERE'}</span><a id='close' onclick='clearAll();'>close</a>`;
      description.appendChild(descriptionText);

      viewAnnouncement.appendChild(title);
      viewAnnouncement.appendChild(description);
      viewAnnouncement.appendChild(announcementFooter);
      
  document.body.appendChild(viewAnnouncement);
  document.body.appendChild(fullScreen);
}

const clearAll = () => {
  let fullScreen = document.querySelector('.fullScreen');
  let viewAnnouncement = document.querySelector('.viewAnnouncement');
  document.body.removeChild(viewAnnouncement);
  document.body.removeChild(fullScreen);
}