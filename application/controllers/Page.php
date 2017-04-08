<?php
class Page extends Public_Controller {

    public function __construct()
    {
         parent::__construct();
        
    }

    public function index(){

        $this->twig->display('twig/front.html', $this->data);

    }


}
