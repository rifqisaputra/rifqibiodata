// Data biodata
const biodataData = {
    fullName: "Rifqi Saputra",
    occupation: "Mahasiswa",
    birthInfo: "Banyumas, 27 Juli 2005",
    gender: "Laki-laki",
    religion: "Islam",
    address: "Jl.Martosayogo RT02/RW02, Teluk",
    email: "iqi27072005@gmail.com",
    phone: "0882003557152",
    social: "@5ecc.iqi",
    skills: [
        "HTML", "CSS", "MySQL", "Microsoft Office"
    ]
};

// Fungsi untuk memperbarui data biodata
function updateBiodata() {
    // Update teks konten
    document.getElementById('fullName').textContent = biodataData.fullName;
    document.getElementById('occupation').textContent = biodataData.occupation;
    document.getElementById('birthInfo').textContent = biodataData.birthInfo;
    document.getElementById('gender').textContent = biodataData.gender;
    document.getElementById('religion').textContent = biodataData.religion;
    document.getElementById('address').textContent = biodataData.address;
    document.getElementById('email').textContent = biodataData.email;
    document.getElementById('phone').textContent = biodataData.phone;
    document.getElementById('social').textContent = biodataData.social;

    // Update skills
    const skillsList = document.getElementById('skillsList');
    skillsList.innerHTML = ''; // Clear existing skills
    biodataData.skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.textContent = skill;
        skillsList.appendChild(skillItem);
    });
}

// Fungsi untuk menambah efek hover pada sections
function addSectionHoverEffects() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.style.backgroundColor = '#f8f9fa';
        });
        section.addEventListener('mouseleave', () => {
            section.style.backgroundColor = 'transparent';
        });
    });
}

// Fungsi untuk animasi smooth scroll
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Fungsi untuk memvalidasi form input (jika ada form)
function validateInput(input) {
    return input.value.trim() !== '';
}

// Event listener saat DOM sudah siap
document.addEventListener('DOMContentLoaded', () => {
    updateBiodata();
    addSectionHoverEffects();
    setupSmoothScroll();

    // Tambahkan animasi fade-in pada load
    document.querySelector('.container').style.opacity = '1';
});

// Fungsi untuk mengupdate data (bisa digunakan jika ada form)
function updateData(field, value) {
    if (biodataData.hasOwnProperty(field)) {
        biodataData[field] = value;
        updateBiodata();
    }
}

// Event listener untuk image hover effect
document.getElementById('profileImage').addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.05)';
});

document.getElementById('profileImage').addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});
