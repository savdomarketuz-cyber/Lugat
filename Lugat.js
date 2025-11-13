// lugat.js

// Boshlang'ich ma'lumotlar
let dictionary = {
    "A": [
        { term: "Agenda", definition: "Kun tartibi, muhokama qilinadigan masalalar ro'yxati" },
        { term: "Aksiya", definition: "Norozilik namoyishi" },
        { term: "Amnistiya", definition: "Afv qilish, jazoni bekor qilish" }
    ],
    "B": [
        { term: "Byudjet", definition: "Davlat/tashkilot pul rejasi" },
        { term: "Byurokratiya", definition: "Qog'oz ishlar, murakkab jarayon" },
        { term: "Blokirovka", definition: "To'sish, oldini olish" }
    ],
    "D": [
        { term: "Delegat", definition: "Vakil, yuborilgan kishi" },
        { term: "Deklaratsiya", definition: "Rasmiy bayonot, e'lon" },
        { term: "Deputat", definition: "Xalq vakili, parlament a'zosi" }
    ],
    "E": [
        { term: "Ekspert", definition: "Mutaxassis, bilimdon" }
    ],
    "F": [
        { term: "Fraksiya", definition: "Partiya ichidagi guruh" },
        { term: "Fond", definition: "Pul zaxirasi, jamg'arma" }
    ],
    "H": [
        { term: "Hokimiyat", definition: "Boshqaruv, hukumat organlari" }
    ],
    "I": [
        { term: "Immunitet", definition: "Himoya, daxlsizlik huquqi" },
        { term: "Imperativ", definition: "Majburiy buyruq" },
        { term: "Initsiativa", definition: "Taklif, boshlanish" },
        { term: "Institusiya", definition: "Tashkilot, muassasa" },
        { term: "Islohotlar", definition: "Tizimli o'zgarishlar" }
    ],
    "K": [
        { term: "Kampaniya", definition: "Saylov yoki targ'ibot davri" },
        { term: "Kandidat", definition: "Nomzod" },
        { term: "Koalitsiya", definition: "Ittifoq, hamkorlik" },
        { term: "Komissiya", definition: "Maxsus guruh, qo'mita" },
        { term: "Konsensus", definition: "Umumiy kelishuv" },
        { term: "Konstitutsiya", definition: "Asosiy qonun" },
        { term: "Korruptsiya", definition: "Pora, halolsizlik" },
        { term: "Kvorum", definition: "Qaror qabul qilish uchun zarur soni" }
    ],
    "L": [
        { term: "Legitimnost", definition: "Qonuniylik" },
        { term: "Lobbizm", definition: "Manfaatlar uchun ta'sir o'tkazish" },
        { term: "Loyiha", definition: "Reja, taklif" }
    ],
    "M": [
        { term: "Manifest", definition: "Dastur, e'lon" },
        { term: "Mandat", definition: "Vakolat, saylovchilar topshirig'i" },
        { term: "Mayoritet", definition: "Ko'pchilik" },
        { term: "Milliy", definition: "Xalqqa oid, o'ziga xos" },
        { term: "Mobilizatsiya", definition: "Yig'ish, harakatga keltirish" },
        { term: "Modernizatsiya", definition: "Yangilash" },
        { term: "Monitoring", definition: "Kuzatish, nazorat" },
        { term: "Muxolifat", definition: "Qarshilik, raqib kuch" }
    ],
    "N": [
        { term: "Natsional", definition: "Milliy, xalqqa oid" },
        { term: "Neytral", definition: "Betaraf, tarafsiz" },
        { term: "Normativ", definition: "Qoida, me'yor" }
    ],
    "O": [
        { term: "Opozitsiya", definition: "Muxolifat, qarshi kuch" },
        { term: "Ovoz berish", definition: "Saylov, qaror qabul qilish" }
    ],
    "P": [
        { term: "Parlament", definition: "Qonun chiqaruvchi organ" },
        { term: "Partiya", definition: "Siyosiy tashkilot" },
        { term: "Platforma", definition: "Asosiy g'oyalar dasturi" },
        { term: "Plenum", definition: "Umumiy yig'ilish" },
        { term: "Populizm", definition: "Xalqqa yoqish uchun va'dalar" }
    ],
    "R": [
        { term: "Ratifikatsiya", definition: "Tasdiqlash" },
        { term: "Referendum", definition: "Xalq ovozi" },
        { term: "Reforma", definition: "Islohotlar" },
        { term: "Reyting", definition: "Baho, ko'rsatkich" },
        { term: "Rezolyutsiya", definition: "Qaror" }
    ],
    "S": [
        { term: "Sanksiya", definition: "Jazo choralari" },
        { term: "Senator", definition: "Yuqori palata a'zosi" },
        { term: "Shaffoflik", definition: "Ochiqlik" },
        { term: "Siyosat", definition: "Davlat yo'nalishi" }
    ],
    "T": [
        { term: "Tanaffus", definition: "Dam olish vaqti" },
        { term: "Tribunal", definition: "Sud" }
    ],
    "V": [
        { term: "Vakolat", definition: "Huquq, imkoniyat" },
        { term: "Vakil", definition: "A'zo, namoyanda" },
        { term: "Veto", definition: "Rad qilish huquqi" }
    ]
};

// LocalStorage dan ma'lumot yuklash
function loadDictionary() {
    const saved = localStorage.getItem('siyosiyLugat');
    if (saved) {
        dictionary = JSON.parse(saved);
    }
}

// LocalStorage ga saqlash
function saveDictionary() {
    localStorage.setItem('siyosiyLugat', JSON.stringify(dictionary));
}

// Lug'atni ko'rsatish
function displayDictionary(searchTerm = '') {
    const container = document.getElementById('wordsContainer');
    container.innerHTML = '';

    let hasResults = false;

    // Harflarni tartiblash
    const sortedLetters = Object.keys(dictionary).sort();

    sortedLetters.forEach(letter => {
        const words = dictionary[letter];
        
        // Qidiruv filtri
        const filteredWords = words.filter(word => 
            word.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
            word.definition.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (filteredWords.length > 0) {
            hasResults = true;
            
            const section = document.createElement('div');
            section.className = 'letter-section';
            
            const header = document.createElement('div');
            header.className = 'letter-header';
            header.textContent = letter;
            section.appendChild(header);

            filteredWords.forEach(word => {
                const wordItem = document.createElement('div');
                wordItem.className = 'word-item';
                
                const term = document.createElement('div');
                term.className = 'word-term';
                term.textContent = word.term;
                
                const definition = document.createElement('div');
                definition.className = 'word-definition';
                definition.textContent = word.definition;
                
                wordItem.appendChild(term);
                wordItem.appendChild(definition);
                section.appendChild(wordItem);
            });

            container.appendChild(section);
        }
    });

    if (!hasResults) {
        container.innerHTML = '<div class="no-results">Hech narsa topilmadi 😔</div>';
    }
}

// Modal oynani ochish
function openModal() {
    document.getElementById('addModal').style.display = 'block';
    document.getElementById('newTerm').value = '';
    document.getElementById('newDefinition').value = '';
}

// Modal oynani yopish
function closeModal() {
    document.getElementById('addModal').style.display = 'none';
}

// Yangi so'z saqlash
function saveWord() {
    const term = document.getElementById('newTerm').value.trim();
    const definition = document.getElementById('newDefinition').value.trim();

    if (!term || !definition) {
        alert('Iltimos, barcha maydonlarni to\'ldiring!');
        return;
    }

    // Birinchi harfni aniqlash
    const firstLetter = term[0].toUpperCase();

    // Agar harf mavjud bo'lmasa, yangi array yaratish
    if (!dictionary[firstLetter]) {
        dictionary[firstLetter] = [];
    }

    // So'zni qo'shish
    dictionary[firstLetter].push({ term, definition });

    // Alifbo tartibida saralash
    dictionary[firstLetter].sort((a, b) => a.term.localeCompare(b.term));

    // Saqlash va qayta ko'rsatish
    saveDictionary();
    displayDictionary();
    closeModal();

    alert('✅ So\'z muvaffaqiyatli qo\'shildi!');
}

// Qidiruv
document.getElementById('searchInput').addEventListener('input', (e) => {
    displayDictionary(e.target.value);
});

// Modal tashqarisiga bosganda yopish
window.onclick = function(event) {
    const modal = document.getElementById('addModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Sahifa yuklanganda
loadDictionary();
displayDictionary();
