<?php
class Pages extends CI_Controller {

    public function __construct()
    {
         parent::__construct();
         $this->load->model('pages_model');
    }

    public function view($page = 'home')
    {
        $data['title'] = "CI3 Test";


        if (  file_exists(APPPATH.'/views/pages/'.$page.'.php'))
        {
            $data['title'] = ucfirst($page); // Capitalize the first letter

            $this->load->view('templates/header', $data);
            $this->load->view('pages/'.$page, $data);
            $this->load->view('templates/footer', $data);
        }
        else
        {
            $data['pageitem'] = $this->pages_model->get_page($page);
            if ( $data['pageitem'])
            {
                $this->load->view('templates/header', $data);
                $this->load->view('pages/index', $data);
                $this->load->view('templates/footer', $data);
            }
            else
            // no file. noting in db so 404
            { show_404();}
        }

     /*   if ( ! file_exists(APPPATH.'/views/pages/'.$page.'.php'))
        {

            //check if exists in database
            $data['pageitem'] = $this->pages_model->get_page($page);

            print_r($data['pageitem']);

            print_r($data['page']);

            //$page="index";

            //else
            // Whoops, we don't have a page for that!
            //show_404();
        }

    $data['title'] = ucfirst($page); // Capitalize the first letter

    $this->load->view('templates/header', $data);
    $this->load->view('pages/'.$page, $data);
    $this->load->view('templates/footer', $data);
    */

    }

}
