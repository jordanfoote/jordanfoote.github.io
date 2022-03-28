"use strict";

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');

}));

const bar = document.querySelector('.bar');
const navLink = document.querySelector('.nav-link');
const logo = document.querySelector('.logo');
const navBar = document.querySelector('.navbar');
const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
const navLink1 = document.querySelector('.nav-link-1');
const navLink2 = document.querySelector('.nav-link-2');
const navLink3 = document.querySelector('.nav-link-3');
toggle.onclick = function () {
    bar.classList.toggle('active');
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    navBar.classList.toggle('active');
    navLink.classList.toggle('active');
    logo.classList.toggle('active');
    navLink1.classList.toggle('active');
    navLink2.classList.toggle('active');
    navLink3.classList.toggle('active');
}