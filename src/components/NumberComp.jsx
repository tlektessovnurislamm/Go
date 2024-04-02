import React, { useState } from 'react';
import { club } from '../data'

function Booking() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [bookingStatus, setBookingStatus] = useState(null);
  const [bookedSeats, setBookedSeats] = useState([10, 15, 20]); 

  const handleSeatSelection = (seatId) => {
    if (bookedSeats.includes(seatId)) {
      alert("Это место уже занято.");
      return;
    }

    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatId));
      setTotalAmount(totalAmount - club[0].count);
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
      setTotalAmount(totalAmount + club[0].count);
    }
  };

  const handleBooking = () => {
    if (selectedSeats.length === 0) {
      alert("Выберите хотя бы одно место.");
    } else {
      bookSeats(selectedSeats)
        .then(response => {
          setBookingStatus(response.status);
          if (response.status === "успешно") {
            setBookedSeats([...bookedSeats, ...selectedSeats]);
            setSelectedSeats([]);
            setTotalAmount(0);
            alert("Бронирование успешно завершено!");
          } else {
            alert("Ошибка бронирования. Пожалуйста, попробуйте позже.");
          }
        })
        .catch(error => {
          console.error("Ошибка бронирования:", error);
          alert("Произошла ошибка. Пожалуйста, попробуйте позже.");
        });
    }
  };

  const bookSeats = (seats) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ status: seats + "," }); 
      }, 1000);
    });
  };

  return (
    <div className="center">
      <div className="tickets">
        <div className="ticket-selection">
          <div className="header">
          </div>
          <div className="seats">
            <div className="all-seats">
              {[...Array(24)].map((_, index) => (
                <div
                  key={index}
                  className={`seat ${selectedSeats.includes(index + 1) ? "selected" : ""} ${bookedSeats.includes(index + 1) ? "booked" : ""}`}
                  onClick={() => handleSeatSelection(index + 1)}
                >
                  {index + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="price">
          <div className="total">
            <div className="amount">{totalAmount}</div>
          </div>
          <button type="button" onClick={handleBooking}>Забронировать</button>
        </div>
        {bookingStatus && <div className="booking-status">Место бронирования: {bookingStatus}</div>}
      </div>
    </div>
  );
}

export default Booking;
