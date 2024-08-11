function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// Example usage:
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true





function adviseClothing(temperature, isRaining) {
    if (temperature < 50) {
        if (isRaining) {
            return "Wear a warm, waterproof jacket.";
        } else {
            return "Wear a warm coat.";
        }
    } else if (temperature >= 50 && temperature <= 70) {
        if (isRaining) {
            return "Wear a light jacket and carry an umbrella.";
        } else {
            return "Wear a light jacket.";
        }
    } else {
        if (isRaining) {
            return "Wear a raincoat.";
        } else {
            return "Wear comfortable summer clothing.";
        }
    }
}

// Example usage:
console.log(adviseClothing(45, true));  // "Wear a warm, waterproof jacket."
console.log(adviseClothing(65, false)); // "Wear a light jacket."
console.log(adviseClothing(80, true));  // "Wear a raincoat."





function fibonacci(n) {
    if (n < 0) {
        throw new Error("Input must be a non-negative integer.");
    }
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage:
console.log(fibonacci(5)); // 5
console.log(fibonacci(10)); // 55





function isPalindrome(str) {
    // Helper function to clean the string
    function cleanString(s) {
        return s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    }

    str = cleanString(str);

    function checkPalindrome(start, end) {
        if (start >= end) {
            return true;
        }
        if (str[start] !== str[end]) {
            return false;
        }
        return checkPalindrome(start + 1, end - 1);
    }

    return checkPalindrome(0, str.length - 1);
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("hello")); // false

