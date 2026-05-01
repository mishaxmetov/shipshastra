// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculate);

function calculate() {
    // All plans are now paid, no free trials
    
  
    
    // Show loading state
    const calculateBtn = document.getElementById('calculateBtn');
    const originalBtnText = calculateBtn.textContent;
    calculateBtn.disabled = true;
    calculateBtn.classList.add('loading');
    calculateBtn.textContent = 'गणना हो रही है...';
    
    // Hide previous results
    const resultsSection = document.getElementById('resultsSection');
    resultsSection.style.display = 'none';
    resultsSection.classList.remove('visible');
    
    // Get input values
    const feet1 = parseInt(document.getElementById('feet1').value) || 0;
    const inches1 = parseInt(document.getElementById('inches1').value) || 0;
    const feet2 = parseInt(document.getElementById('feet2').value) || 0;
    const inches2 = parseInt(document.getElementById('inches2').value) || 0;

    // Calculate area with steps
    const totalInches1 = feet1 * 12 + inches1;
    const totalInches2 = feet2 * 12 + inches2;
    const area = totalInches1 * totalInches2;
    
    // Show calculation steps
    document.getElementById('step1').innerHTML = `
        लंबाई = ${feet1} फुट ${inches1} इंच = (${feet1} × 12) + ${inches1} = ${totalInches1} इंच<br>
        चौड़ाई = ${feet2} फुट ${inches2} इंच = (${feet2} × 12) + ${inches2} = ${totalInches2} इंच
    `;
    
    document.getElementById('step2').innerHTML = `
        क्षेत्रफल = लंबाई × चौड़ाई<br>
        = ${totalInches1} × ${totalInches2}<br>
        = ${area} वर्ग इंच
    `;

    // Calculate Mool Rashi
    const moolRashi = area % 27;
    
    // Show Mool Rashi calculation
    document.getElementById('step3').innerHTML = `
        मूल राशि = क्षेत्रफल ÷ 27 का शेष<br>
        = ${area} ÷ 27<br>
        = ${Math.floor(area/27)} × 27 + ${moolRashi} (शेष)<br>
        = ${moolRashi}
    `;

    // Calculate Aay
    const aay = area % 8;
    const aayNames = [
        "धाक्षाय", "ध्वजाय", "धुमाय", "सिहाय",
        "श्वानाय", "वृषभाय", "खराय", "गजाय"
    ];

    // Calculate Nakshatra
    const nakshatra = (moolRashi * 8) % 27;
    const nakshatraNames = [
        "रेवती - देव गण", "अश्विनी - देव गण", "भरणी - मनुष्य गण", 
        "कृत्तिका - राक्षस गण", "रोहिणी - मनुष्य गण", "मॄगशिरा - देव गण",
        "आद्रा- मनुष्य गण", "पुनर्वसु - देव गण", "पुष्य - देव गण",
        "अश्लेशा - राक्षस गण", "मघा - राक्षस गण", "पूर्वाफाल्गुनी - मनुष्य गण",
        "उत्तराफाल्गुनी - मनुष्य गण", "हस्त - देव गण", "चित्रा - राक्षस गण",
        "स्वाती", "विशाखा - राक्षस गण", "अनुराधा - देव गण",
        "ज्येष्ठा - राक्षस गण", "मूल - राक्षस गण", "पूर्वाषाढा मनुष्य गण",
        "उत्तराषाढा - मनुष्य गण", "श्रवण - देव गण", "धनिष्ठा - राक्षस गण",
        "शतभिषा - राक्षस गण", "पूर्वभाद्र्पद - मनुष्य गण", "उत्तरभाद्रपदा - मनुष्य गण"
    ];

    // Calculate Vyaya
    const vyaya = nakshatra % 8;
    const vyayaNames = [
        "चिंतात्मक", "शांत", "पौर", "प्रद्योत",
        "श्रीयानन्द", "मनोहर", "श्रीवत्स", "विभव"
    ];

    // Calculate Anshak
    const anshak = (moolRashi + vyaya) % 3;
    const anshakNames = ["राजांशक", "इन्द्राशक", "यामांशक"];

    // Calculate Karan
    const karan = (moolRashi * 9) % 11;
    const karanNames = [
        "कीस्तुध", "बव", "बालव", "कैलव", "तैतिल",
        "गिर", "वणीज", "विष्टि", "सकुनी", "चतुष्पद", "नाग"
    ];

    // Calculate Tatva
    const tatva = (moolRashi * 8) % 5;
    const tatvaNames = ["आकाश", "पृथ्वी", "जल", "अग्नि", "वायु"];

    // Calculate Disha
    const dishaNames = [
        "उत्तर", "पूर्व", "दक्षिण", "पश्चिम", "पूर्व",
        "दक्षिण", "पश्चिम", "उत्तर", "दक्षिण", "पश्चिम",
        "उत्तर", "पूर्व", "दक्षिण", "पश्चिम", "पूर्व",
        "दक्षिण", "पश्चिम", "उत्तर", "पूर्व", "पश्चिम",
        "उत्तर", "पूर्व", "दक्षिण", "पश्चिम", "पूर्व",
        "दक्षिण", "पश्चिम"
    ];

    // Update all results with calculations
    document.getElementById('area').innerHTML = `${area} चौरस इंच <span class="calculation">(लंबाई × चौड़ाई = ${totalInches1} × ${totalInches2})</span>`;
    document.getElementById('moolRashi').innerHTML = `${moolRashi} <span class="calculation">(${area} ÷ 27 का शेष)</span>`;
    
    // Aay calculation (क्षेत्रफल % 8)
    document.getElementById('aay').innerHTML = `${aayNames[aay]} <span class="calculation">(${area} ÷ 8 का शेष = ${aay})</span>`;
    
    // Nakshatra calculation (मूल राशि × 8 % 27)
    document.getElementById('nakshatra').innerHTML = `${nakshatraNames[nakshatra]} <span class="calculation">(${moolRashi} × 8 ÷ 27 का शेष = ${nakshatra})</span>`;
    
    // Vyaya calculation (नक्षत्र % 8)
    document.getElementById('vyaya').innerHTML = `${vyayaNames[vyaya]} <span class="calculation">(${nakshatra} ÷ 8 का शेष = ${vyaya})</span>`;
    
    // Anshak calculation (मूल राशि + व्यय) % 3
    document.getElementById('anshak').innerHTML = `${anshakNames[anshak]} <span class="calculation">((${moolRashi} + ${vyaya}) ÷ 3 का शेष = ${anshak})</span>`;
    
    // Karan calculation (मूल राशि × 9 % 11)
    document.getElementById('karan').innerHTML = `${karanNames[karan]} <span class="calculation">(${moolRashi} × 9 ÷ 11 का शेष = ${karan})</span>`;
    
    // Tatva calculation (मूल राशि × 8 % 5)
    document.getElementById('tatva').innerHTML = `${tatvaNames[tatva]} <span class="calculation">(${moolRashi} × 8 ÷ 5 का शेष = ${tatva})</span>`;
    
    // Disha (based on मूल राशि)
    document.getElementById('disha').innerHTML = `${dishaNames[moolRashi]} <span class="calculation">(मूल राशि ${moolRashi} के अनुसार)</span>`;
    
    // Show results with animation
    setTimeout(() => {
        const resultsSection = document.getElementById('resultsSection');
        resultsSection.style.display = 'block';
        
        // Trigger reflow
        void resultsSection.offsetWidth;
        
        // Add visible class to trigger animation
        resultsSection.classList.add('visible');
        
        // All results are now shown for all plans
        
        // Reset button state
        calculateBtn.disabled = false;
        calculateBtn.classList.remove('loading');
        calculateBtn.textContent = originalBtnText;
        
        // Scroll to results
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // All plans are now paid, no special handling for free trials
        
        // All plans are now paid, no special handling for free calculation plans
    }, 800); // Slight delay for better UX
}
