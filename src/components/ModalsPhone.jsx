

function ModalsPhone(props) {
    return (
        <>
            {/* modal line */}
            <div className="modal fade" id={props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel"><i className="fa-solid fa-square-phone"></i> <b>ติดต่อทางเบอร์โทรศัพท์</b></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='center-card-body'>
                                <i className="fa-solid fa-square-phone" style={{ fontSize: "80px" }}></i>
            
                                <br />
                                <div className='text-phone'>
                                    <b className='mt-2'>Phone Number</b>
                                </div>
                                <hr />
                                <p>เบอร์โทร : <a href="tel:0801475750" className="phoneNumber">080-147-5750</a><span>080-147-5750</span><b className="card-click-phoneNumber">คลิกเลย</b></p> 
                                <hr />
                                <p>เจ๊ะอูหมาก มะสมัน</p>
                                </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalsPhone
