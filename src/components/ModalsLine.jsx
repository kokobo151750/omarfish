import '../assets/css/modals.css';

function ModalsLine(props) {
    return (
        <>
            {/* modal line */}
            <div className="modal fade" id={props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel"><i className="fa-brands fa-line text-green"></i> <b className='text-green'>ติดต่อทางไลด์</b></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='center-card-body'>
                                <i className="fa-brands fa-line text-green" style={{ fontSize: "80px" }}></i>
                                <br />
                                <div className='text-qrcode'>
                                    <b className='mt-2'>QRCode Line</b>
                                </div>
                                <hr />
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqyz0uQOYe-na7oIkspN3VIPfehUA6M6G5xQ&s" alt="img" width={250} height={250} />
                                <hr />
                                <p className='mt-2'>เจ๊ะอูหมาก มะสมัน</p>
                                <p><b style={{color:"rgb(13, 212, 29)"}}>LineID : @omar1891</b></p>       
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalsLine
