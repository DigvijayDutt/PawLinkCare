import React from 'react';
import Navbar from '../components/Navbar';
import './home.css';

function Home() {
  return (
    <> 
      <Navbar />
      <header className='header'>
        <div className='left'>
          <img src='logo-photoaidcom-cropped (1).jpg' alt='Logo' />
        </div>
        <div className='mid'>
          <ul className='navbar'>
            <li><a href='https://goldsgym.in/' className='active'><b>Home</b></a></li>
            <li><a href='https://en.wikipedia.org/wiki/Gym'><b>About</b></a></li>
            <li><a href='https://www.myfitnesspal.com/account/create/welcome'><b>Hire Caretaker</b></a></li>
            <li><a href='https://goldsgym.in/contact/'><b>Find Pet</b></a></li>
          </ul>
        </div>
        <div className='right'>
          <button className='btn' onClick={() => window.location.href='tel:+9523813934'}>Login</button>
        </div>
      </header>

      <div className='border-solid'>
        <p className='welcome'>Welcome to PawLink</p>
        <img src='Screenshot 2024-06-10 1831311.png' alt='Pet' className='image' />
      </div>

      <div className='head1'><b>Available Caretaker</b></div>

      <div className='container'>
        <div className='top-bar'>
          <div className='prabhu'>
            <img src='IMG_8832-photoaidcom-cropped.PNG' alt='Prabhat' />
            <div className='name1'><b>Prabhat Thakur</b></div>
          </div>
          <button className='btn gop' onClick={() => window.location.href='www.gmail.com'}>Go</button>
          <div className='time'>
            <img src='time.png' alt='Time' />
            <div className='time-txt'><b>Time:</b> 10:30am-5pm</div>
          </div>
          <div className='date'>
            <img src='date.png' alt='Date' />
            <div className='date-txt'><b>Date:</b> 12 June 2025</div>
          </div>
          <div className='exp'>
            <img src='exp.png' alt='Experience' />
            <div className='exp-txt'><b>Experience:</b> Expert</div>
          </div>
          <div className='availability'>
            <img src='availability.png' alt='Availability' />
            <div className='availability-txt'><b>Availability:</b> Weekdays</div>
          </div>
          <div className='disc'>Hello my name is Prabhat, I'm a pet lover available to take care of your pet</div>
        </div>
      </div>

      <div className='container2'>
        <div className='top-bar2'>
          <div className='priya'>
            <img src='img_priya.PNG' alt='Priya' />
            <div className='name2'><b>Priya Sharma</b></div>
          </div>
          <button className='btn gop2' onClick={() => window.location.href='www.gmail.com'}>Go</button>
          <div className='time2'>
            <img src='time.png' alt='Time' />
            <div className='time-txt2'><b>Time:</b> 10:30am-5pm</div>
          </div>
          <div className='date2'>
            <img src='date.png' alt='Date' />
            <div className='date-txt2'><b>Date:</b> 12 June 2025</div>
          </div>
          <div className='exp2'>
            <img src='exp.png' alt='Experience' />
            <div className='exp-txt2'><b>Experience:</b> Expert</div>
          </div>
          <div className='availability2'>
            <img src='availability.png' alt='Availability' />
            <div className='availability-txt2'><b>Availability:</b> Weekdays</div>
          </div>
          <div className='disc2'>Hello my name is Priya, I'm a pet lover available to take care of your pet</div>
        </div>
      </div>

      <div className='dog_face'>
        <img src='dod_face.png' alt='Dog Face' className='resized-image' />
      </div>

      <div className='head2'><b>Available Pets</b></div>

      <div className='container_a'>
        <div className='top-bar_a'>
          <div className='cheeku'>
            <img src='cheeku.jpg' alt='Cheeku' />
            <div className='name_a'><b>Cheeku</b></div>
          </div>
          <button className='btn gop_a' onClick={() => window.location.href='www.gmail.com'}>Go</button>
          <div className='time_a'>
            <img src='time.png' alt='Time' />
            <div className='time-txt_a'><b>Time:</b> 10:30am-5pm</div>
          </div>
          <div className='date_a'>
            <img src='date.png' alt='Date' />
            <div className='date-txt_a'><b>Date:</b> 12 June 2025</div>
          </div>
          <div className='location_a'>
            <img src='location.png' alt='Location' />
            <div className='location-txt_a'><b>Location:</b> Gaziabad</div>
          </div>
          <div className='age_a'>
            <img src='age.png' alt='Age' />
            <div className='age-txt_a'><b>Age:</b> 4 years</div>
          </div>
          <div className='type_a'>
            <img src='type.png' alt='Type' />
            <div className='type-txt_a'><b>Type:</b> Dog</div>
          </div>
          <div className='breed_a'>
            <img src='Breed.png' alt='Breed' />
            <div className='breed-txt_a'><b>Breed:</b> Cutie</div>
          </div>
        </div>
      </div>

      <div className='container_b'>
        <div className='top-bar_b'>
          <div className='kitty'>
            <img src='kitty.jpg' alt='Kittu' />
            <div className='name_b'><b>Kittu</b></div>
          </div>
          <button className='btn gop_b' onClick={() => window.location.href='www.gmail.com'}>Go</button>
          <div className='time_b'>
            <img src='time.png' alt='Time' />
            <div className='time-txt_b'><b>Time:</b> 10:30am-5pm</div>
          </div>
          <div className='date_b'>
            <img src='date.png' alt='Date' />
            <div className='date-txt_b'><b>Date:</b> 12 June 2025</div>
          </div>
          <div className='location_b'>
            <img src='location.png' alt='Location' />
            <div className='location-txt_b'><b>Location:</b> Ranchi</div>
          </div>
          <div className='age_b'>
            <img src='age.png' alt='Age' />
            <div className='age-txt_b'><b>Age:</b> 2 years</div>
          </div>
          <div className='type_b'>
            <img src='type.png' alt='Type' />
            <div className='type-txt_b'><b>Type:</b> Cat</div>
          </div>
          <div className='breed_b'>
            <img src='Breed.png' alt='Breed' />
            <div className='breed-txt_b'><b>Breed:</b> Pussy</div>
          </div>
        </div>
      </div>

      <div className='side'>
        <img src='side_cats.png' alt='Side Cats' className='side_cats' />
      </div>

      <div className='last-txt'>
        <p className='last-txt_a'><b>Take care of Pets &</b><br /><b>start earning </b><br /><b>money</b></p>
        <p className='last-txt_b'>Cuddly companions need care, and you can turn that love into cash! <br /> Become a pet sitter and earn money while showering furry friends <br /> with love and attention.</p>
      </div>
    </>
  );
}

export default Home;
