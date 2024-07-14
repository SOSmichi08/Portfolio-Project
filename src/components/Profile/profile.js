document.addEventListener('DOMContentLoaded', function() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const loggedInAs = document.getElementById('loggedInAs');
    const documentsList = document.getElementById('documentsList');
  
    if (loggedInUser === 'Employer') {
      loggedInAs.textContent = `Logged in as: Employer`;
      // Load documents for Employer
      loadDocumentsForEmployer();
      // Hide add and remove document buttons for Employer
      const addDocumentBtn = document.getElementById('addDocumentBtn');
      addDocumentBtn.style.display = 'none';
  
      const removeDocumentBtn = document.getElementById('removeDocumentBtn');
      removeDocumentBtn.style.display = 'none';
    } else if (loggedInUser === 'Admin') {
      loggedInAs.textContent = `Logged in as: Admin`;
      // Load documents for Admin
      loadDocumentsForAdmin();
      // Show add and remove document buttons for Admin
      const addDocumentBtn = document.getElementById('addDocumentBtn');
      addDocumentBtn.style.display = 'inline-block';
  
      const removeDocumentBtn = document.getElementById('removeDocumentBtn');
      removeDocumentBtn.style.display = 'inline-block';
  
      addDocumentBtn.addEventListener('click', function() {
        // Trigger file input click
        fileInput.click();
      });
  
      removeDocumentBtn.addEventListener('click', function() {
        const documentName = prompt('Enter document name to remove:');
        if (documentName) {
          // Logic to find and remove document by name
          const documentToRemove = Array.from(documentsList.children).find(child => {
            if (child.tagName === 'A' && child.textContent === documentName) {
              return child;
            }
          });
  
          if (documentToRemove) {
            documentToRemove.remove();
            alert(`Document "${documentName}" removed successfully.`);
          } else {
            alert(`Document "${documentName}" not found.`);
          }
  
          // Additional logic to remove document from backend or storage
        }
      });
    }
  
    // File input element for selecting files
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.multiple = true;
    fileInput.style.display = 'none'; // Hide the file input
  
    // Handle file selection
    fileInput.addEventListener('change', function() {
      const fileList = fileInput.files;
  
      // Iterate through selected files
      for (let i = 0; i < fileList.length; i++) {
        const newDocument = {
          name: fileList[i].name,
          url: URL.createObjectURL(fileList[i]) // Generate a URL for each file
        };
  
        // Add new document to the list
        const docLink = document.createElement('a');
        docLink.href = newDocument.url;
        docLink.textContent = newDocument.name;
        docLink.setAttribute('target', '_blank');
        documentsList.appendChild(docLink);
        documentsList.appendChild(document.createElement('br'));
  
        // Additional logic to save newDocument to backend or storage
        alert(`Document "${newDocument.name}" added successfully.`);
      }
    });
  
    // Function to load documents for Employer (Assuming static documents for example)
    function loadDocumentsForEmployer() {
      const documents = [
        { name: 'BMS Exam Score', url: 'https://drive.google.com/file/d/1zB4AJZ1ZWl9A8ENlLD9j6ZH1gVOGnmvx/view?usp=drive_link' },
        { name: 'Internship Assessment', url: 'https://drive.google.com/file/d/1uiR7fz_Pt3K7Q_Sx54fXAOpkpxOdPmNX/view?usp=drive_link' },
        { name: 'Multicheck Certificate', url: 'https://drive.google.com/file/d/1NAaxa8ixHzA-j1lwudR0Kwe51piN33IA/view?usp=drive_link'},
        { name: 'First Certificate English Score', url: 'https://drive.google.com/file/d/1dwirI0pbRzq2KZEnHpuTpZsg-vrmRAfw/view?usp=drive_link'},
        { name: 'Stellwerk Exam Score', url: 'https://drive.google.com/file/d/17d2CMY9Z5FJWZtH-7eYTh058Rgzz2Jx9/view?usp=drive_link'},
        { name: 'Report Cards (Primary and Secondary School)', url: 'https://drive.google.com/file/d/17n4heGtBatCuY5R19w20kIO21eghlJZN/view?usp=drive_link'},
      ];
      renderDocuments(documents);
    }
  
    // Function to load documents for Admin (Assuming static documents for example)
    function loadDocumentsForAdmin() {
      const documents = [
        { name: 'BMS Exam Score', url: 'https://drive.google.com/file/d/1zB4AJZ1ZWl9A8ENlLD9j6ZH1gVOGnmvx/view?usp=drive_link' },
        { name: 'Internship Assessment', url: 'https://drive.google.com/file/d/1uiR7fz_Pt3K7Q_Sx54fXAOpkpxOdPmNX/view?usp=drive_link' },
        { name: 'Multicheck Certificate', url: 'https://drive.google.com/file/d/1NAaxa8ixHzA-j1lwudR0Kwe51piN33IA/view?usp=drive_link'},
        { name: 'First Certificate English Score', url: 'https://drive.google.com/file/d/1dwirI0pbRzq2KZEnHpuTpZsg-vrmRAfw/view?usp=drive_link'},
        { name: 'Stellwerk Exam Score', url: 'https://drive.google.com/file/d/17d2CMY9Z5FJWZtH-7eYTh058Rgzz2Jx9/view?usp=drive_link'},
        { name: 'Report Cards (Primary and Secondary School)', url: 'https://drive.google.com/file/d/17n4heGtBatCuY5R19w20kIO21eghlJZN/view?usp=drive_link'},
      ];
      renderDocuments(documents);
    }
  
    // Function to render documents on the profile page
    function renderDocuments(documents) {
      documents.forEach(doc => {
        const docLink = document.createElement('a');
        docLink.href = doc.url;
        docLink.textContent = doc.name;
        docLink.setAttribute('target', '_blank');
        docLink.classList.add('document-link'); // Add a class for styling
        docLink.style.color = '#375a7f'; // Adjust this color to match your homepage design
        docLink.style.textDecoration = 'none'; // Remove underline
        documentsList.appendChild(docLink);
        documentsList.appendChild(document.createElement('br'));
      });
    }
  
    // Logout functionality
    const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn.addEventListener('click', function() {
      localStorage.removeItem('loggedInUser');
      window.location.href = 'index.html';
    });
  });
  