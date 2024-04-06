function toggleTheme(theme) {
	const htmlElement = document.querySelector("html");
	htmlElement.setAttribute("data-bs-theme", theme);
	const darkModeButton = document.getElementById("dark-mode-button");
	darkModeButton.innerHTML = theme === "light" ? '<i class="bi bi-moon"></i>' : '<i class="bi bi-sun"></i>';

	// Store the user's preference in local storage
	localStorage.setItem("theme", theme);
}
// Set the theme based on the user's preference
const theme = localStorage.getItem("theme");
if (theme) {
	toggleTheme(theme);
} else {
    // If the user's preference is not found, set the theme based on the user's system preference
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    toggleTheme(prefersDarkScheme.matches ? "dark" : "light");
}

// add onclick event to the dark mode button
{
	/* <div class="text-end">
<button
id="dark-mode-button"
class="btn btn-outline-light"
>
<i class="bi bi-moon"></i>
</button>
</div> */
}
const darkModeButton = document.getElementById("dark-mode-button");
darkModeButton.addEventListener("click", () => {
    const currentTheme = document.querySelector("html").getAttribute("data-bs-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    toggleTheme(newTheme);
});