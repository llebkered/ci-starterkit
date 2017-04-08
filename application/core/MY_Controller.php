<?php

defined('BASEPATH') or exit('No direct script access allowed');

class MY_Controller extends CI_Controller
{
    public $data = array();

    public function __construct()
    {
        parent::__construct();

        //$this->output->enable_profiler(true);
    }
}

/* Admin Controller */
class Admin_Controller extends MY_Controller
{
    public function __construct()
    {
        parent::__construct();

        if (!$this->ion_auth->logged_in()) {
            redirect('user/login');
        }
    }
}

/* Public Controller */
class Public_Controller extends MY_Controller
{
    public function __construct()
    {
        parent::__construct();
        // if offline load offline page
        /*
        $config = [
	        'paths' => ['/path/to/twig/templates', VIEWPATH],
	        'cache' => '/path/to/twig/cache',
        ];
        */
        $config = array();
        $this->load->library('twig', $config);

    }
}
