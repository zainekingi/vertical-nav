var ham = document.getElementsByClassName('ham')[0];
var navLnks = document.getElementsByClassName('nav')[0];
var navIcons = document.getElementsByClassName('navbar-icon');
var count = 75;
var rot = 90;
var isOpen;
var vpWidth;

window.addEventListener('resize', function() {
  navLnks.style.height = '0px';
  vpWidth = window.innerWidth;
  console.log(vpWidth);
});

ham.addEventListener('click', toggleNav);

function toggleNav(){
  if(!isOpen) {
    var openFn = setInterval(function() {
      if(vpWidth > 768) {
        if(count !== 150) {
          openNavDesk();
        } else {
          clearInterval(openFn);
        }
      } else {
        if(count !== 200) {
          openNavMob();
        } else {
          clearInterval(openFn);
        }
      }
    }, 1);
    isOpen = true;
  } else {
    var closeFn = setInterval(function() {
      if(vpWidth > 768) {
        if(count > 75) {
          closeNavDesk();
        } else {
          clearInterval(closeFn);
        }
      } else {
        if(count > 50) {
          closeNavMob();
        } else {
          clearInterval(closeFn);
        }
      }
    }, 1);
    isOpen = false;
  }
}


function openNavDesk() {
  count ++;
  navLnks.style.width = count + 'px';
  navLnks.style.height = '100%';
}

function closeNavDesk() {
  count --;
  navLnks.style.width = count + 'px';
}

function openNavMob() {
  count ++;
  navLnks.style.height = count + 'px';
  navLnks.style.width = '100%';
}

function closeNavMob() {
  count --;
  navLnks.style.height = count + 'px';
}

/*function closeNavIcon() {
  if(rot === 135) {
    clearInterval(closeNavIcon);
  } else {
    rot ++;
  }
  navIcons[0].style.transformOrigin = '5px center';
  navIcons[1].style.transformOrigin = 'center 4px';
  navIcons[0].style.transform = 'rotate(' + rot + 'deg)';
  navIcons[1].style.transform = 'rotate(' + -rot + 'deg)';
}

function openNavIcon() {
  if(rot === 90) {
    clearInterval(openNavIcon);
  } else {
    navIcons[0].style.transform = 'rotate(' + -rot + 'deg)';
    navIcons[1].style.transform = 'rotate(' + rot + 'deg)';
  }
}*/
