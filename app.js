function calculateZones() {
    const lthr = parseFloat(document.getElementById('lthr').value);

    if (isNaN(lthr) || lthr <= 0) {
        alert('Please enter a valid LTHR value.');
        return;
    }

    // Calculate the zones
    const zone1 = [(lthr * 0.75).toFixed(0), (lthr * 0.80).toFixed(0)];
    const zone2 = [(lthr * 0.81).toFixed(0), (lthr * 0.89).toFixed(0)];
    const zone3 = [(lthr * 0.96).toFixed(0), (lthr * 1.00).toFixed(0)];
    const zone4 = [(lthr * 1.02).toFixed(0), (lthr * 1.05).toFixed(0)];
    const zone5 = (lthr * 1.06).toFixed(0);

    // Display the zones
    document.getElementById('zone1').textContent = `${zone1[0]} - ${zone1[1]} bpm`;
    document.getElementById('zone2').textContent = `${zone2[0]} - ${zone2[1]} bpm`;
    document.getElementById('zone3').textContent = `${zone3[0]} - ${zone3[1]} bpm`;
    document.getElementById('zone4').textContent = `${zone4[0]} - ${zone4[1]} bpm`;
    document.getElementById('zone5').textContent = `${zone5}+ bpm`;

    // Show the zones section
    document.getElementById('zones').style.display = 'block';
}