import QR_test from '../../../Assets/Image//QR_code_test.jpg';
import Logo_Sacombank from '../../../Assets/Image/Logo_Sacombank.png';
import Logo_bidv from '../../../Assets/Image/Logo_BIDV.png';
import Logo_vietcombank from '../../../Assets/Image/logo_vietcombank.jpg';

const PayPage = () => {
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-6'>
      <div className='bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl'>
        <div className='text-center mb-4'>
          <h1 className='text-lg font-bold'>CỔNG THANH TOÁN</h1>
          <h2 className='text-2xl text-blue-500 font-semibold'>VNPAY-QR</h2>
        </div>
        <div className='bg-blue-100 text-blue-700 p-2 rounded mb-4 text-center'>
          Quý khách vui lòng không tắt trình duyệt cho đến khi nhận được kết quả
          giao dịch trên website. Xin cảm ơn!
        </div>

        <div className='flex flex-wrap'>
          <div className='w-full md:w-1/2 flex flex-col items-center'>
            <div className='border border-gray-300 p-4 rounded'>
              <img
                src={QR_test} // Thay bằng URL mã QR từ firebase
                alt='VNPay QR'
                className='w-40 h-40'
              />
            </div>
            <p className='mt-4 text-blue-600 text-lg font-semibold'>
              Scan to Pay
            </p>
            <p className='text-xl font-bold text-gray-800 mt-2'>1.000.000.000 VND</p>
            <a href='#' className='text-blue-500 mt-2'>
              Hướng dẫn thanh toán?
            </a>
          </div>

          <div className='w-full md:w-1/2 mt-6 md:mt-0'>
            <h3 className='text-lg font-bold mb-2'>
              Thanh toán qua Ngân hàng SCB
            </h3>
            <form>
              <div className='mb-4'>
                <label className='block text-gray-600'>Số thẻ</label>
                <input
                  type='text'
                  placeholder='****************2198'
                  className='w-full border rounded p-2'
                />
              </div>
              <div className='mb-4 flex justify-between'>
                <div className='w-1/2 pr-2'>
                  <label className='block text-gray-600'>Ngày phát hành</label>
                  <input
                    type='text'
                    placeholder='07/15'
                    className='w-full border rounded p-2'
                  />
                </div>
                <div className='w-1/2 pl-2'>
                  <label className='block text-gray-600'>Tên chủ thẻ</label>
                  <input
                    type='text'
                    placeholder='NGUYEN VAN A'
                    className='w-full border rounded p-2'
                  />
                </div>
              </div>
              <div className='mb-4'>
                <input type='checkbox' id='terms' className='mr-2' />
                <label htmlFor='terms' className='text-gray-600'>
                  Điều kiện sử dụng dịch vụ
                </label>
              </div>
              <div className='flex space-x-4'>
                <button className='bg-blue-500 text-white py-2 px-6 rounded'>
                  XÁC THỰC
                </button>
                <button className='bg-gray-300 text-gray-800 py-2 px-6 rounded'>
                  HỦY
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className='text-red-500 text-sm mt-4'>  
          Số tiền giao dịch không hợp lệ. Số tiền hợp lệ phải nằm trong khoảng
          hạn mức tối thiểu và tối đa của từng ngân hàng quy định. Quý khách vui
          lòng kiểm tra lại.
        </div>
        {/* Chỗ này muốn hiện thì phải check là số tiền tối thiểu và toai chưa làm :)) */}
        <div className='mt-6'>
          <h4 className='text-gray-600 mb-2'>Sử dụng Ứng dụng hỗ trợ VNPAY</h4>
          <div className='grid grid-cols-3 md:grid-cols-6 gap-2'>
            <button>
              <img
                src={Logo_Sacombank}
                alt='Ngân hàng Sacombank'
                className='border rounded p-2'
              />
            </button>
            <button>
              <img
                src={Logo_bidv}
                alt='Ngân hàng BIDV'
                className='border rounded p-2'
              />
            </button>
            <button>
              <img
                src={Logo_vietcombank}
                alt='Ngân hàng Vietcombank'
                className='border rounded p-2'
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayPage;
