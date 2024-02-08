function ellenorizNev() {
    let nev = document.getElementById("nev").value;

    if (/\d/.test(nev)) {
        alert("A név nem tartalmazhat számot.");
        return false;
    }

    if (!/[a-z]/.test(nev)) {
        alert("A névnek tartalmaznia kell kisbetűt.");
        return false;
    }

    if (!/[A-Z]/.test(nev)) {
        alert("A névnek tartalmaznia kell nagybetűt.");
        return false;
    }

    if (/[^\w\s]/.test(nev)) {
        alert("A név nem tartalmazhat speciális karaktert.");
        return false;
    }

    let nevReszek = nev.split(" ");
    if (nevReszek.length < 2 || nevReszek[0].length < 2 || nevReszek[1].length < 3) {
        alert("Vezetéknév legalább 2 karakter, keresztnév legalább 3 karakter.");
        return false;
    }

    alert("A név megfelelő.");
    return true;
}


