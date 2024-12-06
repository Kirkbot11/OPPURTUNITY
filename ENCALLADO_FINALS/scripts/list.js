document.addEventListener('DOMContentLoaded', () => {
  
    const rankingTable = document.getElementById('rankingTable');
  

    const data = [
      { rank: 1, school: "Rizal Technological University", campus: "Boni", score: "99.99%", increase: "+0.5%", exams: "100 exams" },
      { rank: 2, school: "Rizal Technological University", campus: "Pasig", score: "99.50%", increase: "+0.3%", exams: "95 exams" },
      { rank: 3, school: "University of the Philippines", campus: "Diliman", score: "98.99%", increase: "+0.7%", exams: "120 exams" },
      { rank: 4, school: "De La Salle University", campus: "Taft", score: "97.89%", increase: "+0.4%", exams: "90 exams" },
      { rank: 5, school: "Ateneo de Manila University", campus: "Loyola", score: "96.75%", increase: "+0.6%", exams: "85 exams" },
      { rank: 6, school: "Mapúa University", campus: "Intramuros", score: "96.50%", increase: "+0.2%", exams: "100 exams" },
      { rank: 7, school: "Polytechnic University of the Philippines", campus: "Sta. Mesa", score: "95.99%", increase: "+0.9%", exams: "110 exams" },
      { rank: 8, school: "Far Eastern University", campus: "Manila", score: "94.80%", increase: "+0.5%", exams: "105 exams" },
      { rank: 9, school: "University of Santo Tomas", campus: "España", score: "94.75%", increase: "+0.8%", exams: "100 exams" },
      { rank: 10, school: "Adamson University", campus: "San Marcelino", score: "93.60%", increase: "+0.2%", exams: "80 exams" },
      { rank: 11, school: "National University", campus: "Manila", score: "92.50%", increase: "+0.4%", exams: "75 exams" },
      { rank: 12, school: "Pamantasan ng Lungsod ng Maynila", campus: "Intramuros", score: "92.30%", increase: "+0.5%", exams: "70 exams" },
      { rank: 13, school: "University of Makati", campus: "Taguig", score: "91.80%", increase: "+0.4%", exams: "65 exams" },
      { rank: 14, school: "Lyceum of the Philippines University", campus: "Manila", score: "91.50%", increase: "+0.3%", exams: "60 exams" },
      { rank: 15, school: "University of San Carlos", campus: "Cebu", score: "91.30%", increase: "+0.4%", exams: "85 exams" },
      { rank: 16, school: "Silliman University", campus: "Dumaguete", score: "91.10%", increase: "+0.2%", exams: "90 exams" },
      { rank: 17, school: "Ateneo de Davao University", campus: "Davao", score: "90.85%", increase: "+0.3%", exams: "75 exams" },
      { rank: 18, school: "Xavier University", campus: "Cagayan de Oro", score: "90.70%", increase: "+0.5%", exams: "80 exams" },
      { rank: 19, school: "Mindanao State University - Iligan Institute of Technology", campus: "Iligan", score: "90.50%", increase: "+0.4%", exams: "95 exams" },
      { rank: 20, school: "University of the Cordilleras", campus: "Baguio", score: "90.20%", increase: "+0.3%", exams: "70 exams" },
    ];
  

    data.forEach((row) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${row.rank}. ${row.school} <span class="campus">(${row.campus})</span></td>
        <td>
          <span class="ranking-value">${row.score}</span> 
          <span class="increase">${row.increase}</span>
        </td>
        <td>${row.exams}</td>
      `;
      rankingTable.appendChild(tr);
    });
  });


  