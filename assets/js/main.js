// Main JS for site interactions (mobile nav toggle, simple form handling)
document.addEventListener('DOMContentLoaded', function () {
	const navToggle = document.getElementById('nav-toggle');
	const nav = document.getElementById('main-nav');
	let overlay = null;
	let navCloseBtn = null;

	function createOverlay() {
		if (document.getElementById('nav-overlay')) return document.getElementById('nav-overlay');
		const o = document.createElement('div');
		o.id = 'nav-overlay';
		o.className = 'nav-overlay';
		document.body.appendChild(o);
		return o;
	}

	function createNavClose() {
		if (nav.querySelector('.nav-close')) return nav.querySelector('.nav-close');
		const btn = document.createElement('button');
		btn.type = 'button';
		btn.className = 'nav-close';
		btn.setAttribute('aria-label', 'Close navigation');
		btn.textContent = '✕';
		nav.insertBefore(btn, nav.firstChild);
		return btn;
	}

	function openNav() {
		nav.classList.add('open');
		overlay.classList.add('visible');
		document.body.classList.add('nav-open');
		navToggle.setAttribute('aria-expanded', 'true');
		navToggle.textContent = '✕';
		const firstLink = nav.querySelector('a');
		if (firstLink) firstLink.focus();
	}

	function closeNav() {
		nav.classList.remove('open');
		if (overlay) overlay.classList.remove('visible');
		document.body.classList.remove('nav-open');
		navToggle.setAttribute('aria-expanded', 'false');
		navToggle.textContent = '☰';
		navToggle.focus();
	}

	if (navToggle && nav) {
		overlay = createOverlay();
		navCloseBtn = createNavClose();

		navToggle.setAttribute('aria-expanded', 'false');

		navToggle.addEventListener('click', () => {
			if (nav.classList.contains('open')) closeNav();
			else openNav();
		});

		overlay.addEventListener('click', closeNav);
		navCloseBtn.addEventListener('click', closeNav);

		const navLinks = nav.querySelectorAll('a');
		navLinks.forEach(link => {
			link.addEventListener('click', () => {
				if (window.innerWidth <= 600 && nav.classList.contains('open')) {
					setTimeout(closeNav, 50);
				}
			});
		});

		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape' && nav.classList.contains('open')) closeNav();
		});

		window.addEventListener('resize', () => {
			if (window.innerWidth > 600 && nav.classList.contains('open')) {
				closeNav();
			}
		});
	}

	// Simple client-side handler for forms so submitting gives feedback without backend
	const forms = document.querySelectorAll('form[data-ajax]');
	forms.forEach(form => {
		form.addEventListener('submit', function (e) {
			e.preventDefault();
			const submit = form.querySelector('button[type="submit"]');
			if (submit) {
				submit.disabled = true; submit.textContent = 'Sending...';
			}
			setTimeout(() => {
				alert('Thank you! Your message has been received.');
				form.reset();
				if (submit) { submit.disabled = false; submit.textContent = 'Submit'; }
			}, 800);
		});
	});

	// Social share helpers (used on post.html)
	window.openShare = function (url) {
		window.open(url, 'share', 'toolbar=0,status=0,width=600,height=400');
	}
});
