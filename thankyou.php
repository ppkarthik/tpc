<?php
require 'braintree-php-4.5.0/lib/Braintree.php';
$gateway = new Braintree_Gateway([
    'environment' => 'sandbox',
    'merchantId' => 'hks7325w6hqpmygy',
    'publicKey' => '4r34k2f6w522kbmv',
    'privateKey' => '487037d54eef8df77798d8efc32bd3fd'
]);

if (isset($_GET['nonce'])) {
    $nonceFromClient = $_GET['nonce'];

    $result = $gateway->transaction()->sale([
        'amount' => '8.78',
        'paymentMethodNonce' => $nonceFromClient,
        'options' => [
          'submitForSettlement' => true
        ],
    ]);
       
    if ($result->success || !is_null($result->transaction)) {
    $transaction = $result->transaction; 
    print("Thank you for your order. Payment went through succcessfully.\n"); 
    print("\n");
    }

    header('Content-type: application/json');
    print json_encode($result, JSON_PRETTY_PRINT);
    print json_encode($result);
    exit;
}
       
       
?>
