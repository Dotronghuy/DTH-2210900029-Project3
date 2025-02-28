document.addEventListener("DOMContentLoaded", function () {
    const colRight = document.querySelector("#col_right .content_right");

    function createEmployeeList() {
        colRight.innerHTML = `
            <div class="header_right">
                <h2>Quản lý nhân viên</h2>
                <button class="btn_add">
                    <i class="fa-solid fa-plus"></i> Thêm nhân viên
                </button>
            </div>

            <div class="search_bar">
                <input type="text" id="search" placeholder="Tìm kiếm nhân viên..." autocomplete="off">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>

            <div class="table_container">
                <table>
                    <thead>
                        <tr>
                            <th>Tên</th>
                            <th>Ngày sinh</th>
                            <th>Giới tính</th>
                            <th>SĐT</th>
                            <th>Địa chỉ</th>
                            <th>Chức vụ</th>
                            <th>Email</th>
                            <th>Trạng thái</th>
                            <th>Ngày vào làm</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Nguyễn Văn A</td>
                            <td>12/05/1990</td>
                            <td>Nam</td>
                            <td>0987654321</td>
                            <td>Hà Nội</td>
                            <td>Nhân viên</td>
                            <td>nva@email.com</td>
                            <td>Đang làm</td>
                            <td>01/02/2020</td>
                            <td>
                                <button class="btn_edit"><i class="fa-solid fa-pen"></i></button>
                                <button class="btn_delete"><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Trần Thị B</td>
                            <td>22/09/1985</td>
                            <td>Nữ</td>
                            <td>0912345678</td>
                            <td>TP.HCM</td>
                            <td>Quản lý</td>
                            <td>ttb@email.com</td>
                            <td>Đang làm</td>
                            <td>15/06/2018</td>
                            <td>
                                <button class="btn_edit"><i class="fa-solid fa-pen"></i></button>
                                <button class="btn_delete"><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    }

    function createJobList() {
        colRight.innerHTML = `
            <div class="header_right">
                <h2>Danh sách công việc</h2>
                <button class="btn_add">
                    <i class="fa-solid fa-plus"></i> Thêm công việc
                </button>
            </div>
    
            <div class="search_bar">
                <input type="text" id="search" placeholder="Tìm kiếm công việc..." autocomplete="off">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
    
            <div class="table_container">
                <table>
                    <thead>
                        <tr>
                            <th>Tên công việc</th>
                            <th>Mô tả</th>
                            <th>Ngày giao</th>
                            <th>Hạn hoàn thành</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Cắt tỉa cây xanh</td>
                            <td>Chăm sóc, cắt tỉa các cây lớn trong công viên.</td>
                            <td>01/02/2024</td>
                            <td>10/02/2024</td>
                            <td><span class="status in-progress">Đang thực hiện</span></td>
                            <td>
                                <button class="btn_edit"><i class="fa-solid fa-pen"></i></button>
                                <button class="btn_delete"><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Tưới cây định kỳ</td>
                            <td>Đảm bảo cây xanh được tưới đủ nước mỗi ngày.</td>
                            <td>05/02/2024</td>
                            <td>05/03/2024</td>
                            <td><span class="status completed">Hoàn thành</span></td>
                            <td>
                                <button class="btn_edit"><i class="fa-solid fa-pen"></i></button>
                                <button class="btn_delete"><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Kiểm tra sâu bệnh</td>
                            <td>Phát hiện và xử lý sâu bệnh trên cây.</td>
                            <td>10/02/2024</td>
                            <td>20/02/2024</td>
                            <td><span class="status overdue">Quá hạn</span></td>
                            <td>
                                <button class="btn_edit"><i class="fa-solid fa-pen"></i></button>
                                <button class="btn_delete"><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    }

    function createAttendanceList() {
        colRight.innerHTML = `
            <div class="header_right">
                <h2>Chấm công nhân viên</h2>
                <button class="btn_add">
                    <i class="fa-solid fa-plus"></i> Thêm chấm công
                </button>
            </div>

            <div class="search_bar">
                <input type="text" id="search" placeholder="Tìm kiếm nhân viên..." autocomplete="off">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>

            <div class="table_container">
                <table>
                    <thead>
                        <tr>
                            <th>Tên nhân viên</th>
                            <th>Ngày làm việc</th>
                            <th>Giờ vào</th>
                            <th>Giờ ra</th>
                            <th>Tổng giờ</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody id="attendance_list">
                        <tr>
                            <td>Nguyễn Văn A</td>
                            <td>25/02/2025</td>
                            <td>08:00</td>
                            <td>17:00</td>
                            <td>9 giờ</td>
                            <td>
                                <button class="btn_edit"><i class="fa-solid fa-pen"></i></button>
                                <button class="btn_delete"><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Trần Thị B</td>
                            <td>25/02/2025</td>
                            <td>09:00</td>
                            <td>18:00</td>
                            <td>9 giờ</td>
                            <td>
                                <button class="btn_edit"><i class="fa-solid fa-pen"></i></button>
                                <button class="btn_delete"><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    }
    function createSalaryList() {
        colRight.innerHTML = `
            <div class="header_right">
                <h2>Bảng lương nhân viên</h2>
                <button class="btn_add">
                    <i class="fa-solid fa-plus"></i> Thêm lương
                </button>
            </div>

            <div class="search_bar">
                <input type="text" id="search" placeholder="Tìm kiếm nhân viên..." autocomplete="off">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>

            <div class="table_container">
                <table>
                    <thead>
                        <tr>
                            <th>Tên nhân viên</th>
                            <th>Tháng</th>
                            <th>Năm</th>
                            <th>Tổng giờ làm</th>
                            <th>Lương cơ bản</th>
                            <th>Phụ cấp</th>
                            <th>Khấu trừ</th>
                            <th>Tổng lương</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody id="salary_list">
                        <tr>
                            <td>Nguyễn Văn A</td>
                            <td>02</td>
                            <td>2025</td>
                            <td>180 giờ</td>
                            <td>10,000,000 VND</td>
                            <td>1,000,000 VND</td>
                            <td>500,000 VND</td>
                            <td>10,500,000 VND</td>
                            <td>
                                <button class="btn_edit"><i class="fa-solid fa-pen"></i></button>
                                <button class="btn_delete"><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Trần Thị B</td>
                            <td>02</td>
                            <td>2025</td>
                            <td>160 giờ</td>
                            <td>12,000,000 VND</td>
                            <td>800,000 VND</td>
                            <td>600,000 VND</td>
                            <td>12,200,000 VND</td>
                            <td>
                                <button class="btn_edit"><i class="fa-solid fa-pen"></i></button>
                                <button class="btn_delete"><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    }
    function createContractList() {
        colRight.innerHTML = `
            <div class="header_right">
                <h2>Danh sách hợp đồng</h2>
                <button class="btn_add">
                    <i class="fa-solid fa-plus"></i> Thêm hợp đồng
                </button>
            </div>

            <div class="search_bar">
                <input type="text" id="search" placeholder="Tìm kiếm nhân viên..." autocomplete="off">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>

            <div class="table_container">
                <table>
                    <thead>
                        <tr>
                            <th>Tên nhân viên</th>
                            <th>Loại hợp đồng</th>
                            <th>Ngày bắt đầu</th>
                            <th>Ngày kết thúc</th>
                            <th>Email</th>
                            <th>Lương cơ bản</th>
                            <th>Phụ cấp</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody id="contract_list">
                        <tr>
                            <td>Nguyễn Văn A</td>
                            <td>Hợp đồng 1 năm</td>
                            <td>01/01/2023</td>
                            <td>01/01/2024</td>
                            <td>nva@email.com</td>
                            <td>10,000,000 VND</td>
                            <td>1,000,000 VND</td>
                            <td>
                                <button class="btn_edit"><i class="fa-solid fa-pen"></i></button>
                                <button class="btn_delete"><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Trần Thị B</td>
                            <td>Hợp đồng vô thời hạn</td>
                            <td>15/06/2018</td>
                            <td>-</td>
                            <td>ttb@email.com</td>
                            <td>12,000,000 VND</td>
                            <td>800,000 VND</td>
                            <td>
                                <button class="btn_edit"><i class="fa-solid fa-pen"></i></button>
                                <button class="btn_delete"><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    }
    function createAssignmentList() {
        colRight.innerHTML = `
            <div class="header_right">
                <h2>Danh sách phân công công việc</h2>
                <button class="btn_add">
                    <i class="fa-solid fa-plus"></i> Thêm phân công
                </button>
            </div>
    
            <div class="search_bar">
                <input type="text" id="search" placeholder="Tìm kiếm nhân viên..." autocomplete="off">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
    
            <div class="table_container">
                <table>
                    <thead>
                        <tr>
                            <th>Tên nhân viên</th>
                            <th>Công việc</th>
                            <th>Ngày bắt đầu</th>
                            <th>Ngày kết thúc</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody id="assignment_list">
                        <tr>
                            <td>Nguyễn Văn A</td>
                            <td>Cắt tỉa cây xanh</td>
                            <td>01/03/2024</td>
                            <td>10/03/2024</td>
                            <td>
                                <button class="btn_edit"><i class="fa-solid fa-pen"></i></button>
                                <button class="btn_delete"><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Trần Thị B</td>
                            <td>Tưới cây định kỳ</td>
                            <td>05/03/2024</td>
                            <td>15/03/2024</td>
                            <td>
                                <button class="btn_edit"><i class="fa-solid fa-pen"></i></button>
                                <button class="btn_delete"><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Lê Văn C</td>
                            <td>Kiểm tra sâu bệnh</td>
                            <td>10/03/2024</td>
                            <td>20/03/2024</td>
                            <td>
                                <button class="btn_edit"><i class="fa-solid fa-pen"></i></button>
                                <button class="btn_delete"><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    }

    createEmployeeList();

    document.querySelector(".ul_listmusic .relative:nth-child(1)").addEventListener("click", function (event) {
        event.preventDefault();
        createEmployeeList();
    });

    document.querySelector(".ul_listmusic .relative:nth-child(2)").addEventListener("click", function (event) {
        event.preventDefault();
        createJobList();
    });
    document.querySelector(".ul_listmusic .relative:nth-child(3)").addEventListener("click", function (event) {
        event.preventDefault();
        createAttendanceList();
    });
    document.querySelector(".ul_listmusic .relative:nth-child(4)").addEventListener("click", function (event) {
        event.preventDefault();
        createSalaryList();
    });
    document.querySelector(".ul_listmusic .relative:nth-child(5)").addEventListener("click", function (event) {
        event.preventDefault();
        createContractList();
    });
    document.querySelector(".ul_listmusic .relative:nth-child(6)").addEventListener("click", function (event) {
        event.preventDefault();
        createAssignmentList();
    });
});

