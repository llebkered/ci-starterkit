<?php
class Pages extends CI_Controller {

    public function __construct()
    {
         parent::__construct();
        
         $this->load->helper('url');
         //$this->load->model('pages_model');
    }

    public function view($page = 'home')
    {
        $data['title'] = "CI3 Test";
echo $page;

        if ( ! file_exists('public/pages/'.$page.'.php'))  //APPPATH.'/views/pages/'.$page.'.php'
        {
                // Whoops, we don't have a page for that!
            echo "nope";
                show_404();
        }
        
        
         $data['title'] = ucfirst($page); // Capitalize the first letter

        $this->load->view('templates/header', $data);
        $this->load->view('pages/'.$page, $data);
        $this->load->view('templates/footer', $data);

    }

}
