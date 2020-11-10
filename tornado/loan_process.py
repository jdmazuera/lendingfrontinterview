import tornado.ioloop
import tornado.web

class LoanAvailability(tornado.web.RequestHandler):
    def set_default_headers(self):
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')

    def get(self):
        requested_amount = self.get_argument('requested_amount',0)
        response = {}

        try:
            requested_amount = int(requested_amount)

            if requested_amount > 50000:
                response['loan_status'] = 'Declined'
            elif requested_amount == 50000:
                response['loan_status'] = 'Undecided'
            elif requested_amount < 50000:
                response['loan_status'] = 'Approved'
        except:
            response['loan_status'] = 'error'

        self.write(response)


if __name__ == "__main__":
    application = tornado.web.Application([
        (r"/loan/check_availability/",LoanAvailability)
    ])
    application.listen(8888)
    tornado.ioloop.IOLoop.current().start()