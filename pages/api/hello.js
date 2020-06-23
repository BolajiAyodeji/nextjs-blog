export default (req, res) => {
    res.status(200).json({
        text: 'Hello 👋',
        description: 'freeCodeCamp is a donor-supported tax-exempt 501(c)(3) nonprofit organization',
        mission: 'to help people learn to code for free.',
        cta: 'donations to freeCodeCamp go toward our education initiatives, and help pay for servers, services, and staff.',
        donate: 'https://www.freecodecamp.org/donate'
    })
  }
