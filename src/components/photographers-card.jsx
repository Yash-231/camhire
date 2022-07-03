import { Card } from "react-bootstrap"
export const Photographers_card = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://picsum.photos/200" data-aos="fade-up" data-aos-duration="1000" className='icon' />
            <Card.Body className='service-desc' data-aos='fade-up' data-aos-duration='1000'>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    {/* <Collapsible /> */}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}



// for (i = 0; i < coll.length; i++) {
//     coll[i].addEventListener("click", function() {
//       this.classList.toggle("active");
//       var content = this.nextElementSibling;
//       if (content.style.maxHeight){
//         content.style.maxHeight = null;
//       } else {
//         content.style.maxHeight = content.scrollHeight + "px";
//       } 
//     });
//   }