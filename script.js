// ==========================================
// GAME LOGIC - EGYPTIAN VISUAL NOVEL
// ==========================================

// --- DANH SÁCH 10 CÂU HỎI MẪU ---
// Bạn có thể dễ dàng thay đổi nội dung câu hỏi và câu trả lời ở đây.
// Đáp án đúng được quy định lần lượt là: 1: A, 2: B, 3: C, 4: C, 5: C, 6: C, 7: D, 8: A, 9: B, 10: A
const questions = [
    {
        question: "Câuhỏi 1: Tượng Nhân Sư ở Giza có thân là con gì?",
        answers: {
            A: "A. ĐápánA: Sư tử (Đáp án đúng)",
            B: "B. ĐápánB: Đại bàng",
            C: "C. ĐápánC: Chim ưng",
            D: "D. ĐápánD: Nhân mã"
        }
    },
    {
        question: "Câuhỏi 2: Con sông nào chảy dọc qua lãnh thổ Ai Cập cổ đại?",
        answers: {
            A: "A. ĐápánA: Sông Amazon",
            B: "B. ĐápánB: Sông Nile (Đáp án đúng)",
            C: "C. ĐápánC: Sông Hằng",
            D: "D. ĐápánD: Sông Mê Kông"
        }
    },
    {
        question: "Câuhỏi 3: Vị vua nữ nổi tiếng nhất Ai Cập cổ đại là ai?",
        answers: {
            A: "A. ĐápánA: Nữ hoàng Victoria",
            B: "B. ĐápánB: Nữ vương Elizabeth",
            C: "C. ĐápánC: Cleopatra (Đáp án đúng)",
            D: "D. ĐápánD: Võ Tắc Thiên"
        }
    },
    {
        question: "Câuhỏi 4: Kim Tự Tháp lớn nhất tại Giza được xây dựng cho Pharaoh nào?",
        answers: {
            A: "A. ĐápánA: Pharaoh Tutankhamun",
            B: "B. ĐápánB: Pharaoh Ramesses II",
            C: "C. ĐápánC: Pharaoh Khufu (Đáp án đúng)",
            D: "D. ĐápánD: Pharaoh Akhenaten"
        }
    },
    {
        question: "Câuhỏi 5: Người Ai Cập cổ đại ướp xác với mục đích gì?",
        answers: {
            A: "A. ĐápánA: Để trưng bày nghệ thuật",
            B: "B. ĐápánB: Giúp giữ vệ sinh môi trường",
            C: "C. ĐápánC: Tin vào sự bất tử và thế giới bên kia (Đáp án đúng)",
            D: "D. ĐápánD: Để làm phân bón nông nghiệp"
        }
    },
    {
        question: "Câuhỏi 6: Chữ viết của người Ai Cập cổ đại được gọi là gì?",
        answers: {
            A: "A. ĐápánA: Chữ Hán",
            B: "B. ĐápánB: Chữ Nêm",
            C: "C. ĐápánC: Chữ Tượng Hình (Đáp án đúng)",
            D: "D. ĐápánD: Chữ Latinh"
        }
    },
    {
        question: "Câuhỏi 7: Kỹ thuật xây dựng Kim Tự Tháp chủ yếu dựa vào chất liệu nào?",
        answers: {
            A: "A. ĐápánA: Gạch nung",
            B: "B. ĐápánB: Bê tông cốt thép",
            C: "C. ĐápánC: Gỗ lim",
            D: "D. ĐápánD: Đá vôi và đá granite (Đáp án đúng)"
        }
    },
    {
        question: "Câuhỏi 8: Vị thần tối cao đại diện cho Thần Mặt Trời của Ai Cập là?",
        answers: {
            A: "A. ĐápánA: Thần Ra (Đáp án đúng)",
            B: "B. ĐápánB: Thần Anubis",
            C: "C. ĐápánC: Thần Osiris",
            D: "D. ĐápánD: Thần Horus"
        }
    },
    {
        question: "Câuhỏi 9: Biểu tượng con mắt bảo hộ nổi tiếng trong văn hóa Ai Cập là?",
        answers: {
            A: "A. ĐápánA: Mắt thần Ra",
            B: "B. ĐápánB: Mắt thần Horus (Đáp án đúng)",
            C: "C. ĐápánC: Mắt thần Anubis",
            D: "D. ĐápánD: Mắt thần Isis"
        }
    },
    {
        question: "Câuhỏi 10: Giấy cổ của người Ai Cập làm từ cây gì ven sông Nile?",
        answers: {
            A: "A. ĐápánA: Cây Papyrus (Đáp án đúng)",
            B: "B. ĐápánB: Cây Tre",
            C: "C. ĐápánC: Cây Dâu tằm",
            D: "D. ĐápánD: Cây Sồi"
        }
    }
];

// Đáp án chuẩn quy định theo yêu cầu của bạn: A, B, C, C, C, C, D, A, B, A
const correctAnswers = ['A', 'B', 'C', 'C', 'C', 'C', 'D', 'A', 'B', 'A'];

// --- TRẠNG THÁI GAME ---
let currentQuestionIndex = 0;
let lives = 4;

// --- TRUY XUẤT PHẦN TỬ DOM ---
const pages = {
    1: document.getElementById('page-1'),
    2: document.getElementById('page-2'),
    3: document.getElementById('page-3'),
    win: document.getElementById('page-win'),
    lose: document.getElementById('page-lose')
};

const heartsContainer = document.getElementById('hearts-container');
const questionText = document.getElementById('question-text');
const currentQuestionNumEl = document.getElementById('current-question-num');
const answerButtons = document.querySelectorAll('.answer-btn');
const quizMainLayout = document.getElementById('quiz-main-layout');
const quizWrongLayout = document.getElementById('quiz-wrong-layout');

// --- HÀM CHUYỂN TRANG (TRANSITIONS) ---
function navigateToPage(pageKey) {
    // Ẩn tất cả các trang
    Object.values(pages).forEach(page => {
        page.classList.remove('active');
    });

    // Hiện trang đích
    pages[pageKey].classList.add('active');

    // Quản lý hiển thị thanh Trái Tim
    if (pageKey === '3') {
        heartsContainer.classList.remove('hidden');
    } else {
        heartsContainer.classList.add('hidden');
    }
}

// --- KHỞI TẠO HỆ THỐNG TIM ---
function updateHeartsUI() {
    for (let i = 1; i <= 4; i++) {
        const heartEl = document.getElementById(`heart-${i}`);
        if (i <= lives) {
            heartEl.classList.remove('broken');
            heartEl.textContent = '❤️';
        } else {
            heartEl.classList.add('broken');
            heartEl.textContent = '🖤'; // Đổi sang màu đen biểu thị tim vỡ
        }
    }
}

// --- HIỂN THỊ CÂU HỎI ---
function renderQuestion() {
    // Reset bố cục về màn câu hỏi chính
    quizMainLayout.classList.remove('hidden');
    quizWrongLayout.classList.add('hidden');

    const currentQuestion = questions[currentQuestionIndex];
    currentQuestionNumEl.textContent = currentQuestionIndex + 1;
    questionText.textContent = currentQuestion.question;

    answerButtons.forEach(btn => {
        const choice = btn.getAttribute('data-choice');
        const textSpan = btn.querySelector('.answer-text');
        
        // Cập nhật text đáp án
        textSpan.textContent = currentQuestion.answers[choice];

        // Reset trạng thái các nút
        btn.classList.remove('correct', 'incorrect');
        btn.disabled = false;
    });
}

// --- XỬ LÝ KHI CHỌN ĐÁP ÁN ---
function handleAnswerClick(e) {
    const selectedBtn = e.currentTarget;
    const selectedChoice = selectedBtn.getAttribute('data-choice');
    const correctChoice = correctAnswers[currentQuestionIndex];

    // Khóa tất cả các nút đáp án không cho bấm tiếp
    answerButtons.forEach(btn => btn.disabled = true);

    if (selectedChoice === correctChoice) {
        // --- TRẢ LỜI ĐÚNG ---
        selectedBtn.classList.add('correct');

        // Đợi 1.5 giây rồi chuyển sang câu tiếp theo
        setTimeout(() => {
            goToNextStep();
        }, 1500);

    } else {
        // --- TRẢ LỜI SAI ---
        selectedBtn.classList.add('incorrect');
        
        // Trừ 1 trái tim
        lives--;
        updateHeartsUI();

        // Đợi 0.8 giây để người dùng thấy đáp án sai trước khi hiện màn hình nhân vật báo lỗi
        setTimeout(() => {
            // Chuyển sang giao diện thông báo Sai rồi
            quizMainLayout.classList.add('hidden');
            quizWrongLayout.classList.remove('hidden');
        }, 800);
    }
}

// --- CHUYỂN TIẾP CÂU HỎI HOẶC KẾT THÚC ---
function goToNextStep() {
    if (lives <= 0) {
        // Hết tim -> Thua
        navigateToPage('lose');
        return;
    }

    if (currentQuestionIndex >= 9) {
        // Vượt qua hết 10 câu -> Thắng
        navigateToPage('win');
        // Kích hoạt một đợt confetti chào mừng tự động nhỏ
        triggerConfetti(0.25, { spread: 60, startVelocity: 40 });
        return;
    }

    // Tiếp tục câu tiếp theo
    currentQuestionIndex++;
    renderQuestion();
}

// --- HÀM BẮN PHÁO HOA GIẤY (CONFETTI) ---
function triggerConfetti(scalar = 1, options = {}) {
    // Cấu hình bắn pháo hoa giấy mượt mà
    try {
        confetti({
            particleCount: Math.floor(80 * scalar),
            angle: 90,
            spread: 80,
            origin: { y: 0.6 },
            colors: ['#cf9e2b', '#e6c35c', '#003e7e', '#ffb703', '#e71d36'],
            ...options
        });
    } catch (e) {
        console.log("Thư viện confetti chưa tải kịp hoặc bị chặn.");
    }
}

// --- KHỞI ĐỘNG LẠI GAME ---
function resetGame() {
    lives = 4;
    currentQuestionIndex = 0;
    updateHeartsUI();
    navigateToPage(1);
}

// --- ĐĂNG KÝ SỰ KIỆN (EVENT LISTENERS) ---

// Bấm nút Start ở trang chủ -> Qua trang 2
document.getElementById('btn-start').addEventListener('click', () => {
    navigateToPage(2);
});

// Bấm NEXT ở trang 2 -> Qua trang 3 (Bắt đầu câu hỏi)
document.getElementById('btn-to-quiz').addEventListener('click', () => {
    navigateToPage(3);
    renderQuestion();
});

// Sự kiện bấm chọn đáp án
answerButtons.forEach(btn => {
    btn.addEventListener('click', handleAnswerClick);
});

// Bấm TIẾP TỤC ở màn hình chọn sai
document.getElementById('btn-next-after-wrong').addEventListener('click', () => {
    goToNextStep();
});

// Nút Chúc Mừng ở trang Thắng -> Bắn Confetti
document.getElementById('btn-congrats').addEventListener('click', () => {
    // Bắn confetti liên tiếp tạo cảm giác lễ hội cực hoành tráng
    triggerConfetti(1.2, { spread: 100, startVelocity: 45 });
    
    // Bắn thêm từ hai góc màn hình
    setTimeout(() => {
        confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
    }, 100);
    setTimeout(() => {
        confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });
    }, 200);
});

// Các nút Chơi lại (Restart)
document.querySelectorAll('.restart-btn').forEach(btn => {
    btn.addEventListener('click', resetGame);
});

// Khởi tạo trạng thái ban đầu của tim khi mới tải trang
updateHeartsUI();
